import React, { Fragment } from "react";
import { connect } from 'react-redux';
import { CheckedIcon, GoogleIcon, TumblrIcon } from "components/Icon";

function GoogleStatus({ connected, url }) {
  if (connected) {
    return <a className="button is-small is-disabled" disabled><CheckedIcon>Google Connected</CheckedIcon></a>
  } else {
    return <a className="button is-small is-primary" href={url}><GoogleIcon>Connect Google</GoogleIcon></a>
  }
}

function TumblrStatus({ connected, url }) {
  if (connected) {
    return <a className="button is-small is-disabled" disabled><CheckedIcon>Tumblr Connected</CheckedIcon></a>
  } else {
    return <a className="button is-small is-primary" href={url}><TumblrIcon>Connect Tumblr</TumblrIcon></a>
  }
}

function ResourceOwnershipStatus({ connected, owned }) {
  if (!connected) {
    return <div/>
  }

  return owned.length === 0
    ? <div className="is-small">We do not see any site data, please contact us, we are here to help.</div>
    : <div className="is-size-7">We see <strong>{owned.map(({ url }) => url).join(", ")}</strong></div>
}

function Description({ owned, isLoading, google, tumblr }) {
  return (
    <Fragment>
      <h1 className="subtitle">Installation</h1>
      <h6 className="subtitle is-6">We are using <strong>Google Verification</strong> & <strong>Tumblr</strong> to verify your site ownership.</h6>
      <div className="field has-addons">
        <p className="control">
          <GoogleStatus {... google}/>
        </p>
        <p className="control">
          <TumblrStatus {... tumblr}/>
        </p>
      </div>
      <br/>
      {!isLoading && <ResourceOwnershipStatus connected={google.connected || tumblr.connected} owned={owned}/>}
    </Fragment>
  );
}

const mapStateToProps = ({ project: { owned, byId }, user: { my : { data: { profiles = {} } } }, auth: { url } } ) => ({
  owned: owned.owned || [],
  isLoading: owned.isLoading,
  google: {
    connected: profiles.google,
    url: url.google
  },
  tumblr: {
    connected: profiles.tumblr,
    url: url.tumblr
  },
});

export default connect(mapStateToProps, undefined)(Description);
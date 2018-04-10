import React, { Fragment } from "react";
import { connect } from 'react-redux';
import { getOwnedProjects } from "reducers/project.actions";
import PendingProjects from "./PendingProjects";
import InstalledProjects from "./InstalledProjects";
import spinnerFactory from "components/spinnerFactory";
import { CheckedIcon, GoogleIcon } from "components/Icon";

const Spinner = spinnerFactory(260);

function UserProjects({ pending, installed }) {
  if (pending.length === 0 && installed.length === 0) {
    return <ul className="timeline">
      <li className="timeline-item is-primary">
        <div className="timeline-marker is-medium is-primary"/>
        <div className="timeline-content">
          <p className="heading">No resources registered</p>
        </div>
      </li>
    </ul>
  }
  return (
    <ul className="timeline">
      <PendingProjects projects={pending}/>
      <li className="timeline-item is-primary"/>
      <InstalledProjects projects={installed}/>
    </ul>
  )
}

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
    return <a className="button is-small is-primary" href={url}><GoogleIcon>Connect Tumblr</GoogleIcon></a>
  }
}

function ResourceOwnershipStatus({ connected, owned }) {
  if (!connected) {
    return <div/>
  }

  return owned.length === 0
    ? <div className="is-small">We do not see any site data, please contact us, we are here to help.</div>
    : <div className="is-size-7">We see <strong>{owned.join(", ")}</strong></div>
}

function InstallationPage({ pending, owned, installed, isLoading, google, tumblr }) {
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
      <br/>
      {isLoading ? <Spinner/> : <UserProjects pending={pending} installed={installed}/>}
    </Fragment>
  );
}

const mapStateToProps = ({ project: { owned, byId }, user: { my : { data: { profiles = {} } } }, auth: { url } } ) => ({
  installed: owned.installed.map(id => byId[id]),
  owned: owned.owned || [],
  pending: owned.pending.map(url => ({ url })),
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

const mapDispatchToProps = (dispatch) => {
  dispatch(getOwnedProjects());
  return {
    refreshProject: () => dispatch(refreshMyProjects()),
    refresh: () => dispatch(getOwnedProjects())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InstallationPage);
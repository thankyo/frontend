import React, { Fragment } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
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
          <p>Connect your <Link to="/settings/profile">google account</Link> or contact us.</p>
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
    return <a className="button is-small" disabled><CheckedIcon>Google Connected</CheckedIcon></a>
  } else {
    return <a className="button is-small is-primary" href={url}><GoogleIcon>Connect Google</GoogleIcon></a>
  }
}

function ResourceOwnershipStatus({ connected, owned }) {
  if (!connected) {
    return <div/>
  }

  return owned.length === 0
    ? <div className="is-small">Google does not have any site data, please refer to <a href="https://support.google.com/webmasters/answer/35179?hl=en">this</a> article or contact us.</div>
    : <div className="is-size-7">We see <strong>{owned.join(", ")}</strong> from Google</div>
}

function MyProjects({ pending, owned, installed, isLoading, isGoogleConnected, googleUrl }) {
  return (
    <Fragment>
      <h1 className="subtitle">Installation</h1>
      <h6 className="subtitle is-6">We are using <strong>Google Verification</strong> to verify your site ownership.</h6>
      <GoogleStatus connected={isGoogleConnected} url={googleUrl}/>
      <br/>
      <br/>
      <ResourceOwnershipStatus connected={isGoogleConnected} owned={owned}/>
      <br/>
      {isLoading ? <Spinner/> : <UserProjects pending={pending} installed={installed}/>}
    </Fragment>
  );
}

const mapStateToProps = ({ project: { owned, byId }, user: { my : { data: { profiles = {} } } }, auth: { url: { google }} } ) => ({
  installed: owned.installed.map(id => byId[id]),
  owned: owned.owned || [],
  pending: owned.pending.map(url => ({ url })),
  isLoading: owned.isLoading,
  isGoogleConnected: profiles.google,
  googleUrl: google
});

const mapDispatchToProps = (dispatch) => {
  dispatch(getOwnedProjects());
  return {
    refreshProject: () => dispatch(refreshMyProjects()),
    refresh: () => dispatch(getOwnedProjects())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProjects);
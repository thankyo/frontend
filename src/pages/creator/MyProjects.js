import React, { Fragment } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { getOwnedProjects } from "reducers/project.actions";
import PendingProjects from "./PendingProjects";
import InstalledProjects from "./InstalledProjects";
import spinnerFactory from "components/spinnerFactory";

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

function MyProjects({ pending, installed, isLoading }) {
  return (
    <Fragment>
      <h1 className="subtitle">Projects</h1>
      <h2 className="subtitle is-6">
        We are using <strong>Google Verification API</strong>.<br/>
        So all you need to do is <Link to="/settings/profile">link your Google</Link> account and we are good to
        go.<br/>
        If you have no sites verified, please refer to <a
        href="https://support.google.com/webmasters/answer/35179?hl=en">Google</a>.
      </h2>
      {isLoading ? <Spinner/> : <UserProjects pending={pending} installed={installed}/>}
    </Fragment>
  );
}

const mapStateToProps = ({ project: { owned, byId } }) => ({
  installed: owned.installed.map(id => byId[id]),
  pending: owned.pending.map(url => ({ url })),
  isLoading: owned.isLoading
});

const mapDispatchToProps = (dispatch) => {
  dispatch(getOwnedProjects());
  return {
    refreshProject: () => dispatch(refreshMyProjects()),
    refresh: () => dispatch(getOwnedProjects())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProjects);
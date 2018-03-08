import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { getOwnedProjects } from "reducers/project.actions";
import PendingProjects from "./PendingProjects";
import InstalledProjects from "./InstalledProjects";

function MyProjects({ pending, installed }) {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h3 className="title">Projects</h3>
          <h2 className="subtitle">
            We are using <strong>Google Verification API</strong>.<br/>
            So all you need to do is <Link to="/settings/profile">link your Google</Link> account and we are good to go.<br/>
            If you have no sites verified, please refer to <a
            href="https://support.google.com/webmasters/answer/35179?hl=en">Google</a>.
          </h2>
          <br/>
          <ul className="timeline">
            <PendingProjects projects={pending}/>
            <li className="timeline-item is-primary"/>
            <InstalledProjects projects={installed}/>
          </ul>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = ({ project: { owned, byId } }) => ({
  installed: owned.installed.map(id => byId[id]),
  pending: owned.pending.map(url => ({ url }))
});

const mapDispatchToProps = (dispatch) => {
  dispatch(getOwnedProjects());
  return {
    refreshProject: () => dispatch(refreshMyProjects()),
    refresh: () => dispatch(getOwnedProjects())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProjects);
import React, { Fragment } from "react";

import { stepByStep } from "components/timeline/util";
import { GoogleIcon, RefreshIcon } from "components/Icon";

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import StartInstallation from "./pending/StartInstallation";
import ChooseWebStack from "./pending/ChooseWebStack";
import FinishInstallation from "./pending/FinishInstallation";
import PostAddingExplanation from "./pending/PostAddingExplanation";
import RefreshLink from "components/RefreshLink";
import { refreshGoogle } from "reducers/project.actions";

import InstalledProject from "./InstalledProject";
import { toInstalledAndPending } from "./util";

const GoogleProjectInstallation = stepByStep(StartInstallation, ChooseWebStack, PostAddingExplanation, FinishInstallation);

const GoogleSummary = ({ projects }) => {
  if (projects.length === 0) {
    return (
      <div>We could not retrieve any project data, please <a href="mailto:antono@loveit.tips">contact us.</a></div>);
  } else {
    return (<div>Found <strong>{projects.map(({ url }) => url).join(", ")}</strong></div>);
  }
};

const GoogleNotConnected = ({ authUrl }) => (
  <div>
    One of the ways to add verified site is through <strong>Google Verification API</strong>.<br/>
    Just connect to Google and we'll fetch all owned Google domains<br/>
    <hr/>
    <a className="button is-small is-primary" href={authUrl}><GoogleIcon>Connect Google</GoogleIcon></a>
  </div>
);

const GoogleConnectionStatus = ({ connected, authUrl, projects, refreshGoogle }) => {
  if (!connected) {
    return <GoogleNotConnected authUrl={authUrl}/>
  } else {
    return (
      <div>
        <GoogleSummary projects={projects}/>
        <br/>
        <RefreshLink className="button is-small is-primary is-outlined is-rounded" onClick={() => refreshGoogle()}>
          <RefreshIcon>Refresh</RefreshIcon>
        </RefreshLink>
      </div>
    )
  }
};

let GoogleProjects = ({ projects, pending, installed, connected, authUrl, refreshGoogle }) => {
  return (
    <Fragment>
      <li className="timeline-header is-primary is-large">
        <div className="timeline-marker is-primary is-image is-30x30 has-text-centered">
          <GoogleIcon/>
        </div>
      </li>
      <li className="timeline-item is-primary is-paddingless">
        <div className="timeline-content">
          <p className="heading">Google</p>
          <GoogleConnectionStatus authUrl={authUrl} connected={connected} projects={projects}
                                  refreshGoogle={refreshGoogle}/>
          <br/>
        </div>
      </li>
      {pending.map((project) => (<GoogleProjectInstallation key={project.url} {...project}/>))}
      {installed.map((project) => (<InstalledProject key={project.url} {...project}/>))}
    </Fragment>
  );
};


const mapStateToProps = ({ project: { owned, byId }, user: { my: { data: { profiles = {} } } }, auth: { url } }) => ({
  ... toInstalledAndPending(owned.google, owned.installed, byId),
  connected: profiles.google,
  authUrl: url.google
});

GoogleProjects = connect(mapStateToProps, (dispatch) => bindActionCreators({ refreshGoogle }, dispatch))(GoogleProjects);

export default GoogleProjects;

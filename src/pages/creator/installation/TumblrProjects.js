import React, { Fragment } from "react";

import { stepByStep } from "components/timeline/util";
import { TumblrIcon, RefreshIcon } from "components/Icon";

import { connect } from 'react-redux';

import StartInstallation from "./pending/StartInstallation";
import FinishInstallation from "./pending/FinishInstallation";
import RefreshLink from "components/RefreshLink";
import { refreshTumblr } from "reducers/project.actions";

import InstalledProject from "./InstalledProject";
import { toInstalledAndPending } from "./util";
import { bindToActions } from "reducers/util/action";

const TumblrProjectInstallation = stepByStep(StartInstallation, FinishInstallation);

const TumblrSummary = ({ projects }) => {
  if (projects.length === 0) {
    return (<div>We could not retrieve any project data, please <a href="mailto:antono@loveit.tips">contact us.</a></div>);
  } else {
    return (<div>Found <strong>{projects.map(({ url }) => url).join(", ")}</strong></div>);
  }
};

const TumblrNotConnected = ({ authUrl }) => (
  <div>
    We also support Tumblr integration
    <hr/>
    <a className="button is-small is-primary" href={authUrl}><TumblrIcon>Connect</TumblrIcon></a>
  </div>
);

const TumblrConnectionStatus = ({ connected, authUrl, projects, refreshTumblr }) => {
  if (!connected) {
    return <TumblrNotConnected authUrl={authUrl}/>
  } else {
    return (
      <div>
        <TumblrSummary projects={projects}/>
        <br/>
        <RefreshLink className="button is-small is-primary is-outlined is-rounded" onClick={() => refreshTumblr()}>
          <RefreshIcon>Refresh</RefreshIcon>
        </RefreshLink>
      </div>
    )
  }
};

let TumblrProjects = ({ projects, installed, pending, connected, authUrl, refreshTumblr }) => {
  return <Fragment>
    <li className="timeline-header is-primary is-large">
      <div className="timeline-marker is-primary is-image is-30x30 has-text-centered">
        <TumblrIcon/>
      </div>
    </li>
    <li className="timeline-item is-primary is-paddingless">
      <div className="timeline-content">
        <p className="heading">Tumblr</p>
        <TumblrConnectionStatus authUrl={authUrl} connected={connected} projects={projects} refreshTumblr={refreshTumblr}/>
        <br/>
      </div>
    </li>
    {pending.map((project) => (<TumblrProjectInstallation key={project.url} {...project}/>))}
    {installed.map((project) => (<InstalledProject key={project.url} {...project}/>))}
  </Fragment>;
};


const mapStateToProps = ({ project: { owned, byId }, user: { my : { data: { profiles = {} } } }, auth: { url } } ) => ({
  ... toInstalledAndPending(owned.tumblr, owned.installed, byId),
  connected: profiles.tumblr,
  authUrl: url.tumblr,
  isLoading: owned.isLoading
});

TumblrProjects =  connect(mapStateToProps, bindToActions({ refreshTumblr }))(TumblrProjects);

export default TumblrProjects;

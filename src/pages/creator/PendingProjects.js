import React, { Fragment } from "react";
import { connect } from "react-redux";
import { enrichProject } from "reducers/project.actions";
import Resource from "components/Resource";
import { InstallIcon, PendingIcon } from "components/Icon";
import { expandableComponent } from "components/timeline/util";
import InstallationPage from "./installation";
import RefreshLink from "components/RefreshLink";
import Project from "components/Project";

const PendingProjectStep2 = ({ webStack, url, _id }) => (
  <Fragment>
    <li className="timeline-item is-primary is-large">
      <div className="timeline-marker is-medium is-primary"/>
      <div className="timeline-content">
        <p className="heading">
          <Resource url={url}/>
        </p>
        <Project id={_id} edit/>
      </div>
    </li>
  </Fragment>
);

const PendingProjectStep1 = ({ webStack, url, _id, enabled, handleExpand }) => (
    <li className="timeline-item is-primary is-large">
      <div className="timeline-marker is-medium is-primary"/>
      <div className="timeline-content">
        <p className="heading">
          <Resource url={url}/>
        </p>
        <InstallationPage url={url} webStack={webStack}/>
        <hr/>
        <div className="button is-small is-primary" onClick={handleExpand}>
          <InstallIcon>Next</InstallIcon>
        </div>
      </div>
    </li>
);

const PendingProjectInstallation = expandableComponent(PendingProjectStep2, PendingProjectStep1);


let PendingProjectCollapsed = ({ webStack, url, _id, enabled, enrich, handleExpand }) => (
  <li className="timeline-item is-primary">
    <div className="timeline-marker is-medium is-primary"/>
    <div className="timeline-content">
      <p className="heading">
        <Resource url={url}/>
      </p>
      <RefreshLink className="button is-small is-primary" onClick={() => enrich().then(handleExpand)}>
        <InstallIcon>Install</InstallIcon>
      </RefreshLink>
    </div>
  </li>
);

PendingProjectCollapsed = connect(undefined, (dispatch, project) => ({ enrich: () => dispatch(enrichProject(project))}) )(PendingProjectCollapsed);


const PendingProject = expandableComponent(PendingProjectInstallation, PendingProjectCollapsed);

const NoPending = () => (
  <li className="timeline-item is-primary">
    <div className="timeline-marker is-medium is-primary"/>
    <div className="timeline-content">
      <p className="heading">All urls were successfully installed</p>
    </div>
  </li>
);

const PendingProjects = ({ projects }) => {
  return <Fragment>
    <li className="timeline-header is-success">
        <span className="tag is-primary">
          <PendingIcon>Pending</PendingIcon>
        </span>
    </li>
    {projects.map((project, i) => (<PendingProject key={i} {...project}/>))}
    {projects.length === 0 && <NoPending/>}
  </Fragment>;
};

export default PendingProjects;
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { enrichProject } from "reducers/project.actions";
import Resource from "components/Resource";
import { CancelIcon, InstallIcon, PendingIcon } from "components/Icon";
import { expandableComponent } from "components/timeline/util";
import InstallationPage from "./installation";
import RefreshLink from "components/RefreshLink";

const PendingProjectExpanded = ({ webStack, url, _id, enabled, handleExpand }) => (
  <Fragment>
    <li className="timeline-item is-primary is-large">
      <div className="timeline-marker is-medium is-primary"/>
      <div className="timeline-content">
        <p className="heading">
          <Resource url={url}/>
        </p>
        <InstallationPage url={url} webStack={webStack}/>
      </div>
    </li>
    <li className="timeline-header is-success">
      <a>
        <span className="tag is-primary" onClick={handleExpand}>
          <CancelIcon>Cancel</CancelIcon>
        </span>
      </a>
    </li>
  </Fragment>
);


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


const PendingProject = expandableComponent(PendingProjectExpanded, PendingProjectCollapsed);

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
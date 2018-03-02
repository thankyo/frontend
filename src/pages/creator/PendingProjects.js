import React, { Fragment } from "react";
import Resource from "components/Resource";
import { CancelIcon, InstallIcon, PendingIcon } from "components/Icon";
import { expandableComponent } from "components/timeline/util";
import InstallationPage from "./installation";

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


const PendingProjectCollapsed = ({ webStack, url, _id, enabled, handleExpand }) => (
  <li className="timeline-item is-primary">
    <div className="timeline-marker is-medium is-primary"/>
    <div className="timeline-content">
      <a className="heading" onClick={handleExpand}>
        <Resource url={url}/>
      </a>
      <p>
        <button className="button is-small is-primary" onClick={handleExpand}><InstallIcon>Install</InstallIcon>
        </button>
      </p>
    </div>
  </li>
);

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
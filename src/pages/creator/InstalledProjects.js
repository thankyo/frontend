import React, { Fragment } from "react";
import Resource from "components/Resource";
import { EditIcon, InstallIcon } from "components/Icon";
import { expandableComponent } from "components/timeline/util";
import InstallationPage from "./installation";

const InstalledProjectExpanded = ({ webStack, url, _id, enabled, handleExpand }) => (
  <Fragment>
    <li className="timeline-item is-primary is-large">
      <div className="timeline-content">
        <p className="heading">
          <Resource url={url}/>
        </p>
        <InstallationPage url={url} webStack={webStack}/>
      </div>
    </li>
    <li className="timeline-header is-success">
        <span className="tag is-primary" onClick={handleExpand}>
          <InstallIcon>Install</InstallIcon>
        </span>
    </li>
  </Fragment>
);


const InstalledProjectCollapsed = ({ webStack, url, _id, enabled, user, avatar, handleExpand }) => (
  <li className="timeline-item is-primary">
    <div className="timeline-marker is-primary is-image is-32x32">
      <img src={avatar} width={32} height={32}/>
    </div>
    <div className="timeline-content">
      <a className="heading" onClick={handleExpand}>
        <Resource url={url}/>
      </a>
      <p>
        <button className="button is-small is-primary" onClick={handleExpand}><EditIcon>Edit</EditIcon>
        </button>
      </p>
    </div>
  </li>
);

const InstalledProject = expandableComponent(InstalledProjectExpanded, InstalledProjectCollapsed);

const NoInstalled = () => (
  <li className="timeline-item is-primary">
    <div className="timeline-marker is-medium is-primary"/>
    <div className="timeline-content">
      <p className="heading">No url installed</p>
    </div>
  </li>
);

const InstalledProjects = ({ projects }) => {
  return <Fragment>
    <li className="timeline-header is-success">
      <span className="tag is-primary">
        <InstallIcon>Installed</InstallIcon>
      </span>
    </li>
    {projects.map((project, i) => (<InstalledProject key={i} {...project}/>))}
    {projects.length === 0 && <NoInstalled/>}
  </Fragment>;
};

export default InstalledProjects;
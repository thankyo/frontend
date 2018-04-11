import React, { Fragment } from "react";
import Resource from "components/Resource";
import { CancelIcon, DeleteIcon, InstallIcon, TwitterIcon } from "components/Icon";
import { expandableComponent } from "components/timeline/util";
import { connect } from "react-redux";
import RefreshLink from "components/RefreshLink";
import { bindActionCreators } from "redux";
import * as actions from "reducers/project.actions";

let InstalledProjectExpanded = ({ project, handleExpand, deleteProject }) => (
  <Fragment>
    <li className="timeline-item is-primary is-large">
      <div className="timeline-marker is-primary is-image is-32x32">
        <img src={project.avatar} width={32} height={32}/>
      </div>
      <div className="timeline-content">
        <p className="heading">
          <Resource url={project.url}/>
        </p>
        <h5 className="subtitle is-6">This will remove all project related data from the system.</h5>
        <h4 className="title is-6">Are you sure?</h4>
        <div className="field has-addons">
          <RefreshLink className="button is-small is-danger is-outlined" onClick={() => deleteProject(project)}>
            <DeleteIcon>Delete</DeleteIcon>
          </RefreshLink>
        </div>
      </div>
    </li>
    <li className="timeline-header is-success">
      <a className="tag is-primary" onClick={handleExpand}>
        <CancelIcon>Cancel</CancelIcon>
      </a>
    </li>
    <li className="timeline-header is-success">
    </li>
  </Fragment>
);

InstalledProjectExpanded = connect(({ project: { byId } }, { _id }) => ({ project: byId[_id] }), (dispatch, { _id }) => bindActionCreators(actions, dispatch))(InstalledProjectExpanded);

const InstalledProjectCollapsed = ({ webStack, url, _id, user, avatar, tags, handleExpand }) => (
  <li className="timeline-item is-primary">
    <div className="timeline-marker is-primary is-image is-32x32">
      <img src={avatar} width={32} height={32}/>
    </div>
    <div className="timeline-content">
      <p className="heading">
        <Resource url={url}/>
      </p>
      <button className="button is-small is-danger is-outlined" onClick={handleExpand}>
        <DeleteIcon>Delete</DeleteIcon>
      </button>
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
    {projects.map((project) => (<InstalledProject key={project._id} {...project}/>))}
    {projects.length === 0 && <NoInstalled/>}
  </Fragment>;
};

export default InstalledProjects;
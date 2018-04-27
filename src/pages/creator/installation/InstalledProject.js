import React, { Fragment } from "react";
import Resource from "components/Resource";
import { CancelIcon, DeleteIcon } from "components/Icon";
import { stepByStep } from "components/timeline/util";
import { connect } from "react-redux";
import RefreshLink from "components/RefreshLink";
import { deleteProject } from "reducers/project.actions";
import { bindToActions } from "reducers/util/action";
import WebStackMarker from "./pending/WebStackMarker";

let ProjectDeleteConfirmation = ({ data: { avatar, url, _id, webStack }, previous, deleteProject }) => (
  <Fragment>
    <li className="timeline-item is-primary is-large">
      <WebStackMarker webStack={webStack}/>
      <div className="timeline-content">
        <p className="heading">
          <Resource url={url}/>
        </p>
        <h5 className="subtitle is-6">This will remove all project related data from the system.</h5>
        <h4 className="title is-6">Are you sure?</h4>
        <div className="field has-addons">
          <RefreshLink className="button is-small is-danger is-outlined" onClick={() => deleteProject({ _id })}>
            <DeleteIcon>Delete</DeleteIcon>
          </RefreshLink>
        </div>
      </div>
    </li>
    <li className="timeline-header is-success">
      <a className="tag is-primary" onClick={previous}>
        <CancelIcon>Cancel</CancelIcon>
      </a>
    </li>
    <li className="timeline-header is-success">
    </li>
  </Fragment>
);

ProjectDeleteConfirmation = connect(undefined, bindToActions({ deleteProject }))(ProjectDeleteConfirmation);

const ProjectInfo = ({ data: { webStack, url, _id, user, avatar, tags } , next }) => (
  <li className="timeline-item is-primary">
    <WebStackMarker webStack={webStack}/>
    <div className="timeline-content">
      <p className="heading">
        <Resource url={url}/>
      </p>
      <button className="button is-small is-danger is-outlined" onClick={next}>
        <DeleteIcon>Delete</DeleteIcon>
      </button>
    </div>
  </li>
);

const InstalledProject = stepByStep(ProjectInfo, ProjectDeleteConfirmation);

export default InstalledProject;
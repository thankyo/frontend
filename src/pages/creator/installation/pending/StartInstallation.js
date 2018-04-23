import React from "react";
import Resource from "components/Resource";
import { InstallIcon, DeleteIcon } from "components/Icon";
import RefreshLink from "components/RefreshLink";
import WebStackMarker from "./WebStackMarker";
import { connect } from "react-redux";
import { deleteOwnedProject } from "reducers/project.actions";
import { bindActionCreators } from "redux";

const StartInstallation = ({ data: { url, webStack }, next, deleteOwnedProject }) => (
  <li className="timeline-item is-primary">
    <WebStackMarker webStack={webStack}/>
    <div className="timeline-content">
      <p className="heading">
        <Resource url={url}/>
      </p>
      <div className="field has-addons">
        <RefreshLink className="button is-small is-primary" onClick={next}>
          <InstallIcon>Install</InstallIcon>
        </RefreshLink>
        <RefreshLink className="button is-small is-danger is-pulled-right" onClick={() => deleteOwnedProject({ url })}>
          <DeleteIcon>Delete</DeleteIcon>
        </RefreshLink>
      </div>
    </div>
  </li>
);

export default connect(undefined, (dispatch) => bindActionCreators({ deleteOwnedProject }, dispatch))(StartInstallation);
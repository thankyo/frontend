import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { enrichProject } from "reducers/project.actions";
import Resource from "components/Resource";
import { InstallIcon } from "components/Icon";
import RefreshLink from "components/RefreshLink";

const InstallationStep1 = ({ url, enrichProject, next }) => (
  <li className="timeline-item is-primary">
    <div className="timeline-marker is-medium is-primary"/>
    <div className="timeline-content">
      <p className="heading">
        <Resource url={url}/>
      </p>
      <RefreshLink className="button is-small is-primary" onClick={() => enrichProject(url).then(next)}>
        <InstallIcon>Install</InstallIcon>
      </RefreshLink>
    </div>
  </li>
);

export default  connect(undefined, (dispatch) => bindActionCreators({ enrichProject }, dispatch))(InstallationStep1);
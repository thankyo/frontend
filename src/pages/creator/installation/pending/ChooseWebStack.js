import React from "react";
import { connect } from "react-redux";
import Resource from "components/Resource";
import { InstallIcon } from "components/Icon";
import Instructions from "./instruction";

const InstallationStep2 = ({ project, next }) => (
  <li className="timeline-item is-primary is-large">
    <div className="timeline-marker is-medium is-primary"/>
    <div className="timeline-content">
      <p className="heading">
        <Resource url={project.url}/>
      </p>
      <Instructions url={project.url} webStack={project.webStack}/>
      <br/>
      <div className="button is-small is-primary" onClick={next}>
        <InstallIcon>Next</InstallIcon>
      </div>
    </div>
  </li>
);

export default connect(({ project: { pending } }, { url }) => ({ project: pending[url] || { url } }))(InstallationStep2);
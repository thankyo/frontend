import React, { Fragment } from "react";

import FinishInstallation from "./pending/FinishInstallation";
import PostAddingExplanation from "./pending/PostAddingExplanation";
import ChooseWebStackOrDelete from "./pending/ChooseWebStackOrDelete";
import { stepByStep } from "components/timeline/util";

import { DibsIcon } from "components/Icon";
import { connect } from 'react-redux';

import AddSite from "./pending/AddSite";

const DibsProjectInstallation = stepByStep(ChooseWebStackOrDelete, PostAddingExplanation, FinishInstallation);

const DibsSummary = ({ projects }) => {
  if (projects.length === 0) {
    return (<div>No Dibs</div>);
  } else {
    return (<div>Dibs on <strong>{projects.map(({ url }) => url).join(", ")}</strong></div>);
  }
};

let DibsProjects = ({ projects }) => {
  return <Fragment>
    <li className="timeline-header is-primary is-large">
      <div className="timeline-marker is-primary is-image is-30x30 has-text-centered">
        <DibsIcon/>
      </div>
    </li>
    <li className="timeline-item is-primary is-paddingless">
      <div className="timeline-content">
        <p className="heading">Dibs</p>
        <DibsSummary projects={projects}/>
        <br/>
      </div>
    </li>
    <AddSite/>
    {projects.map((project) => (<DibsProjectInstallation key={project.url} {...project}/>))}
  </Fragment>;
};


const mapStateToProps = ({ project: { owned } } ) => ({
  projects: owned.dibs,
  installed: owned.installed,
  isLoading: owned.isLoading
});

DibsProjects =  connect(mapStateToProps)(DibsProjects);

export default DibsProjects;

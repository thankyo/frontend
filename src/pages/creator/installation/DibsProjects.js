import React, { Fragment } from "react";

import FinishInstallation from "./pending/FinishInstallation";
import PostAddingExplanation from "./pending/PostAddingExplanation";
import ChooseWebStackOrDelete from "./pending/ChooseWebStackOrDelete";
import { stepByStep } from "components/timeline/util";

import { DibsIcon } from "components/Icon";
import { connect } from 'react-redux';

import DibsForm from "./DibsForm";
import InstalledProject from "./InstalledProject";
import { toInstalledAndPending } from "./util";

const DibsProjectInstallation = stepByStep(ChooseWebStackOrDelete, PostAddingExplanation, FinishInstallation);

const DibsSummary = ({ projects }) => {
  if (projects.length === 0) {
    return (<div>No Dibs</div>);
  } else {
    return (<div>Dibs on <strong>{projects.map(({ url }) => url).join(", ")}</strong></div>);
  }
};

let DibsProjects = ({ projects, pending, installed }) => {
  return <Fragment>
    <li className="timeline-item is-paddingless is-primary">
      <div className="timeline-marker is-image is-32x32 has-text-centered is-white">
        <DibsIcon/>
      </div>
      <div className="timeline-content">
        <p className="heading">Dibs</p>
        <DibsSummary projects={projects}/>
        <br/>
      </div>
    </li>
    <DibsForm/>
    {pending.map((project) => (<DibsProjectInstallation key={project.url} {...project}/>))}
    {installed.map((project) => (<InstalledProject key={project.url} {...project}/>))}
  </Fragment>;
};


const mapStateToProps = ({ project: { owned, byId } } ) => toInstalledAndPending(owned.dibs, owned.installed, byId);

DibsProjects =  connect(mapStateToProps)(DibsProjects);

export default DibsProjects;

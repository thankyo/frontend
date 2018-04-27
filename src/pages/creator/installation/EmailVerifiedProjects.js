import React, { Fragment } from "react";

import FinishInstallation from "./pending/FinishInstallation";
import PostAddingExplanation from "./pending/PostAddingExplanation";
import ChooseWebStackOrDelete from "./pending/ChooseWebStackOrDelete";
import { stepByStep } from "components/timeline/util";

import { EmailIcon } from "components/Icon";
import { connect } from 'react-redux';

import InstalledProject from "./InstalledProject";
import { toInstalledAndPending } from "./util";
import EmailVerifiedForm from "./EmailVerifiedForm";

const EmailVerifiedInstallation = stepByStep(ChooseWebStackOrDelete, PostAddingExplanation, FinishInstallation);

const EmailVerifiedSummary = ({ projects }) => {
  if (projects.length === 0) {
    return (<div>No project verified</div>);
  } else {
    return (<div>Verified <strong>{projects.map(({ url }) => url).join(", ")}</strong></div>);
  }
};

let DibsProjects = ({ projects, pending, installed }) => {
  return <Fragment>
    <li className="timeline-header is-primary is-large">
      <div className="timeline-marker is-primary is-image is-30x30 has-text-centered">
        <EmailIcon/>
      </div>
    </li>
    <li className="timeline-item is-primary is-paddingless">
      <div className="timeline-content">
        <p className="heading">Domain email</p>
        <EmailVerifiedSummary projects={projects}/>
        <br/>
      </div>
    </li>
    <EmailVerifiedForm/>
    {pending.map((project) => (<EmailVerifiedInstallation key={project.url} {...project}/>))}
    {installed.map((project) => (<InstalledProject key={project.url} {...project}/>))}
  </Fragment>;
};


const mapStateToProps = ({ project: { owned, byId } } ) => toInstalledAndPending(owned.dibs, owned.installed, byId);

DibsProjects =  connect(mapStateToProps)(DibsProjects);

export default DibsProjects;

import React, { Fragment } from "react";

import FinishInstallation from "./pending/FinishInstallation";
import PostAddingExplanation from "./pending/PostAddingExplanation";
import ChooseWebStack from "./pending/ChooseWebStack";
import EmailVerification from "./pending/EmailVerification";
import { stepByStep } from "components/timeline/util";

import { EmailIcon } from "components/Icon";
import { connect } from 'react-redux';

import InstalledProject from "./InstalledProject";
import { toInstalledAndPending } from "./util";
import EmailVerifiedForm from "./EmailVerifiedForm";
import ChooseWebStackOrDelete from "./pending/ChooseWebStackOrDelete";

const EmailVerifiedInstallation = stepByStep(EmailVerification, ChooseWebStackOrDelete, PostAddingExplanation, FinishInstallation);

const EmailVerifiedSummary = ({ projects }) => {
  if (projects.length === 0) {
    return (<div>No project verified</div>);
  } else {
    return (<div>Verified <strong>{projects.map(({ url }) => url).join(", ")}</strong></div>);
  }
};

let EmailVerifiedProjects = ({ projects, pending, installed }) => {
  return <Fragment>
    <li className="timeline-item is-paddingless is-primary">
      <div className="timeline-marker is-image is-32x32 has-text-centered is-white">
        <EmailIcon/>
      </div>
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


const mapStateToProps = ({ project: { owned, byId } } ) => toInstalledAndPending(owned.email, owned.installed, byId);

EmailVerifiedProjects =  connect(mapStateToProps)(EmailVerifiedProjects);

export default EmailVerifiedProjects;

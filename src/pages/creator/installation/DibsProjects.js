import React, { Fragment } from "react";

import { stepByStep } from "components/timeline/util";
import { DibsIcon, RefreshIcon } from "components/Icon";

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import StartInstallation from "./pending/StartInstallation";
import FinishInstallation from "./pending/FinishInstallation";
import { refreshTumblr } from "reducers/project.actions";
import PostAddingExplanation from "./pending/PostAddingExplanation";
import ChooseWebStack from "./pending/ChooseWebStack";
import AddSite from "./AddSite";

const DibsProjectInstallation = stepByStep(AddSite, ChooseWebStack, PostAddingExplanation, FinishInstallation);

const DibsSummary = ({ projects }) => {
  if (projects.length === 0) {
    return (<div/>);
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
    <DibsProjectInstallation/>
    {projects.map((project) => (<DibsProjectInstallation key={project.url} {...project}/>))}
  </Fragment>;
};


const mapStateToProps = ({ project: { owned } } ) => ({
  projects: owned.dibs,
  installed: owned.installed,
  isLoading: owned.isLoading
});

DibsProjects =  connect(mapStateToProps, (dispatch) => bindActionCreators({ refreshTumblr }, dispatch))(DibsProjects);

export default DibsProjects;

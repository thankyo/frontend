import React, { Fragment } from "react";
import { stepByStep } from "components/timeline/util";
import { PendingIcon } from "components/Icon";

import StartInstallation from "./pending/StartInstallation";
import ChooseWebStack from "./pending/ChooseWebStack";
import FinishInstallation from "./pending/FinishInstallation";

const PendingProject = stepByStep(StartInstallation, ChooseWebStack, FinishInstallation);

const NoPending = () => (
  <li className="timeline-item is-primary">
    <div className="timeline-marker is-medium is-primary"/>
    <div className="timeline-content">
      <p className="heading">All urls were successfully installed</p>
    </div>
  </li>
);

const PendingProjects = ({ projects }) => {
  return <Fragment>
    <li className="timeline-header is-success">
        <span className="tag is-primary">
          <PendingIcon>Pending</PendingIcon>
        </span>
    </li>
    {projects.map((project) => (<PendingProject key={project.url} {...project}/>))}
    {projects.length === 0 && <NoPending/>}
  </Fragment>;
};

export default PendingProjects;
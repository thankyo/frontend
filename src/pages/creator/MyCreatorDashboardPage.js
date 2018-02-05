import React from "react";
import Profile from "components/Profile";
import EarnedThisMonth from "./EarnedThisMonth";
import ProjectNavigation from "./ProjectNavigation";
import ProjectPosts from "components/Posts/ProjectPosts";
import EditProject from "components/Projects/EditProject";

export default function myCreatorDashboardPage({ project }) {
  return (
    <div className="columns">
      <div className="column is-one-quarter">
        <Profile id="my"/>
        <ProjectNavigation active={project} user="my"/>
      </div>
      <div className="column is-two-quarter">
        {!project && <h1 className="title has-text-centered">Select a project</h1>}
        {project && [
            <EditProject key={0} id={project}/>,
            <ProjectPosts key={2} id={project}/>,
          ]}
      </div>
      <div className="column is-one-quarter">
        <EarnedThisMonth/>
      </div>
    </div>
  );
}

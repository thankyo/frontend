import React from "react";
import ProjectNavigation from "./ProjectNavigation";
import Profile from "components/Profile";
import Project from "components/Project";
import ProjectPosts from "./ProjectPosts";
import EarnedThisMonth from "./EarnedThisMonth";

export default function creatorDashboardPage({ id, project }) {
  return (
    <div className="columns">
      <div className="column is-one-quarter">
        <Profile id={id}/>
        <ProjectNavigation user={id} active={project}/>
      </div>
      <div className="column is-two-quarter">
        <Project id={project}/>
        <ProjectPosts id={project}/>
      </div>
      <div className="column is-one-quarter">
        <EarnedThisMonth/>
      </div>
    </div>
  );
}

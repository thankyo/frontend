import React from "react";
import Profile from "../../components/Profile";
import EarnedThisMonth from "./EarnedThisMonth";
import ViewProject from "./ViewProject";
import ProjectNavigation from "./ProjectNavigation";
import ProjectPosts from "../search/ProjectPosts";

export default function creatorDashboardPage({ id, project }) {
  return (
    <div className="columns">
      <div className="column is-one-quarter">
        <Profile id={id}/>
        <ProjectNavigation user={id} active={project}/>
      </div>
      <div className="column is-two-quarter">
        <ViewProject id={project}/>
        <ProjectPosts id={project}/>
      </div>
      <div className="column is-one-quarter">
        <EarnedThisMonth/>
      </div>
    </div>
  );
}

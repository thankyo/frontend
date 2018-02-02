import React from "react";
import Profile from "../../common/Profile";
import EarnedThisMonth from "./EarnedThisMonth";
import MyProjectNavigation from "./MyProjectNavigation";
import ProjectPosts from "../search/ProjectPosts";

export default function myCreatorDashboardPage({ project }) {
  return (
    <div className="columns">
      <div className="column is-one-quarter">
        <Profile id="my"/>
        <MyProjectNavigation active={project}/>
      </div>
      <div className="column is-two-quarter">
        <ProjectPosts id={project}/>
      </div>
      <div className="column is-one-quarter">
        <EarnedThisMonth/>
      </div>
    </div>
  );
}

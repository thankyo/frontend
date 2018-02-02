import React from "react";
import Profile from "../../common/Profile";
import EarnedThisMonth from "./EarnedThisMonth";
import MyProjectNavigation from "./MyProjectNavigation";
import ProjectPosts from "../search/ProjectPosts";
import EditProject from "./EditProject";

export default function myCreatorDashboardPage({ project }) {
  return (
    <div className="columns">
      <div className="column is-one-quarter">
        <Profile id="my"/>
        <MyProjectNavigation active={project}/>
      </div>
      <div className="column is-two-quarter">
        <EditProject id={project}/>
        <p className="title is-5">Posts</p>
        <ProjectPosts id={project}/>
      </div>
      <div className="column is-one-quarter">
        <EarnedThisMonth/>
      </div>
    </div>
  );
}

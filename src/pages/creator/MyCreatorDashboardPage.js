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
        {!project && <h1>Select project you want to work on</h1>}
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

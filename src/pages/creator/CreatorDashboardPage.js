import React from "react";
import ProjectNavigation from "./ProjectNavigation";
import Profile from "components/Profile";
import Project from "components/Project";
import ProjectPosts from "./ProjectPosts";

export default function creatorDashboardPage({ id, project }) {
  return (
    <div className="columns">
      <div className="column is-one-quarter">
        <Profile id={id}/>
        <ProjectNavigation user={id} active={project}/>
      </div>
      <div className="column is-three-quarter">
        <section className="section">
          <Project id={project}/>
        </section>
        <ProjectPosts id={project}/>
      </div>
    </div>
  );
}

import React from "react";
import Profile from "components/Profile";
import Project from "components/Project";

import EarnedThisMonth from "./EarnedThisMonth";
import ProjectNavigation from "./ProjectNavigation";
import ProjectPosts from "./ProjectPosts";
import MyProjects from "./MyProjects";
import { Route, Switch } from 'react-router-dom';


export default function myCreatorDashboardPage({ project }) {
  return (
    <div className="columns">
      <div className="column is-one-quarter">
        <Profile id="my"/>
        <ProjectNavigation active={project} user="my"/>
      </div>
      <div className="column is-two-quarter">
        <Switch>
          <Route exact path="/creator/my">
            <MyProjects/>
          </Route>
          <Route exact path="/creator/my/project/:project" render={(({ match: { params: { project } } }) => [
              <Project key={0} id={project} edit={true}/>,
              <ProjectPosts key={2} id={project}/>,
            ])}
          />
        </Switch>
      </div>
      <div className="column is-one-quarter">
        <EarnedThisMonth/>
      </div>
    </div>
  );
}

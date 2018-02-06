import React from "react";
import Profile from "components/Profile";
import Project from "components/Project";

import EarnedThisMonth from "./EarnedThisMonth";
import ProjectNavigation from "./ProjectNavigation";
import ProjectPosts from "./ProjectPosts";
import { Route, Switch, Link } from 'react-router-dom';
import { IconWithText } from "components/Icon";

export default function myCreatorDashboardPage({ project }) {
  return (
    <div className="columns">
      <div className="column is-one-quarter">
        <Profile id="my"/>
        <ProjectNavigation active={project} user="my"/>
        <hr/>
        <Link to='/creator/my/add' className="button is-primary is-outlined"><IconWithText className="fa fa-plus-circle" text="Add"/></Link>
      </div>
      <div className="column is-two-quarter">
        <Switch>
          <Route exact path="/creator/my">
            <h1 className="title has-text-centered">Select a project</h1>
          </Route>
          <Route exact path="/creator/my/project/:project" render={(({ match: { params: { project } } }) => [
              <Project key={0} id={project} edit={true}/>,
              <ProjectPosts key={2} id={project}/>,
            ])}
          />
          <Route exact path="/creator/my/add">
            <h1>I'm here to add new project</h1>
          </Route>
        </Switch>
      </div>
      <div className="column is-one-quarter">
        <EarnedThisMonth/>
      </div>
    </div>
  );
}

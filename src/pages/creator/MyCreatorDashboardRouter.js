import React, { Fragment } from "react";
import Profile from "components/Profile";
import Project from "components/Project";

import ProjectNavigation from "./ProjectNavigation";
import ProjectPosts from "./ProjectPosts";
import MyProjects from "./MyProjects";
import InstallPage from "./installation";
import { Route, Switch } from 'react-router-dom';

export default function myCreatorDashboardRouter() {
  return (
    <div className="columns">
      <div className="column is-one-quarter">
        <Switch>
          <Route exact path="/creator/my"><ProjectNavigation user="my"/></Route>
          <Route exact path="/creator/my/project/:project"
                 render={(({ match: { params: { project } } }) => <ProjectNavigation user="my" active={project}/>)}/>
        </Switch>
      </div>
      <div className="column is-three-quarter">
        <Switch>
          <Route exact path="/creator/my">
            <MyProjects/>
          </Route>
          <Route path="/creator/my/install/:id"
                 render={(({ match: { params: { id } } }) => (<InstallPage id={id}/>))}/>
          <Route exact path="/creator/my/project/:project" render={(({ match: { params: { project } } }) => (
            <Fragment>
              <Project id={project} edit={true}/>,
              <ProjectPosts id={project}/>,
            </Fragment>
          ))}
          />
        </Switch>
      </div>
    </div>
  );
}

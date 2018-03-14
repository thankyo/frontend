import React, { Fragment } from "react";
import Project from "components/Project";

import ProjectNavigation from "./ProjectNavigation";
import ProjectPosts from "./ProjectPosts";
import MyProjects from "./MyProjects";
import InstallPage from "./installation";
import { Route, Switch, Link } from 'react-router-dom';
import { InstallIcon } from "components/Icon";

function InstallationLink() {
  let isActive = location.pathname === "/creator/my";
  return (
    <Fragment>
      <br/>
      <Link to="/creator/my">
        <button className={`button is-primary is-small`} disabled={isActive}>
          <InstallIcon>Install</InstallIcon>
        </button>
      </Link>
    </Fragment>
  );
}

export default function myCreatorDashboardRouter() {
  return (
    <div className="columns">
      <div className="column is-one-quarter">
        <Switch>
          <Route exact path="/creator/my">
            <ProjectNavigation user="my"/>
          </Route>
          <Route exact path="/creator/:user/project/:project" render={(({ match: { params: { user, project } } }) => (
            <ProjectNavigation user={user} active={project}/>
          ))}/>
        </Switch>
        <Route path="/creator/my">
          <InstallationLink/>
        </Route>
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
              <section className="section">
                <Project key={project} id={project} edit={true}/>
              </section>
              <ProjectPosts key={`${project}-posts`} id={project}/>
            </Fragment>
          ))}
          />
        </Switch>
      </div>
    </div>
  );
}

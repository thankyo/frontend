import React, { Fragment } from 'react';

import ProjectNavigation from "./ProjectNavigation";
import Profile from "components/Profile";
import Project from "components/Project";

import { Link, Route, Switch } from 'react-router-dom';
import InstallationPage from "./installation";
import ProjectPosts from "./ProjectPosts";
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

export default function CreatorDashboardRouter() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-one-quarter">
            <Switch>
              <Route exact path="/creator/my/project/:project"
                     render={(({ match: { params: { project } } }) => (
                       <Fragment>
                         <ProjectNavigation user="my" active={project}/>
                         <InstallationLink/>
                       </Fragment>
                     ))}
              />
              <Route path="/creator/my">
                <Fragment>
                  <ProjectNavigation user="my"/>
                  <InstallationLink/>
                </Fragment>
              </Route>
              <Route exact path="/creator/:user/project/:project"
                     render={(({ match: { params: { user, project } } }) => (
                       <Fragment>
                         <Profile id={user}/>
                         <ProjectNavigation user={user} active={project}/>
                       </Fragment>
                     ))}/>
            </Switch>
          </div>
          <div className="column is-three-quarters">
            <Switch>
              <Route exact path="/creator/my" component={InstallationPage}/>
              <Route path="/creator/:user/project/:project" render={(({ match: { params: { user, project } } }) => (
                <Fragment>
                  <section className="section">
                    <Project id={project}/>
                  </section>
                  <ProjectPosts id={project}/>
                </Fragment>
              ))}/>
            </Switch>
          </div>
        </div>
      </div>
    </section>
  );
}
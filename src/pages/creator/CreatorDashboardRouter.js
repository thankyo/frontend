import React from 'react';

import CreatorDashboardPage from "./CreatorDashboardPage";
import MyCreatorDashboardPage from "./MyCreatorDashboardPage";
import { Route, Switch } from 'react-router-dom';

export default function CreatorDashboardRouter() {
  return (
    <section className="section container">
      <Switch>
        <Route exact path="/creator" render={(({ match: { params: { id } } }) => <MyCreatorDashboardPage/>)}/>
        <Route exact path="/creator/my/project/:project" render={(({ match: { params: { project } } }) => <MyCreatorDashboardPage project={project}/>)}/>
        <Route path="/creator/:user/project/:project" render={(({ match: { params: { user, project } } }) => <CreatorDashboardPage id={user} project={project} />)}/>
      </Switch>
    </section>
  );
}
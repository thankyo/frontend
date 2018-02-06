import React from 'react';

import CreatorDashboardPage from "./CreatorDashboardPage";
import MyCreatorDashboardPage from "./MyCreatorDashboardPage";
import { Route, Switch } from 'react-router-dom';

export default function CreatorDashboardRouter() {
  return (
    <section className="section container">
      <Switch>
        <Route path="/creator/my" component={MyCreatorDashboardPage}/>
        <Route path="/creator/:user/project/:project" render={(({ match: { params: { user, project } } }) => <CreatorDashboardPage id={user} project={project} />)}/>
      </Switch>
    </section>
  );
}
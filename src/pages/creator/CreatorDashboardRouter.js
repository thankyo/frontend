import React from 'react';

import CreatorDashboardPage from "./CreatorDashboardPage";
import MyCreatorDashboardPage from "./MyCreatorDashboardPage";
import { Route, Switch } from 'react-router-dom';

export default function CreatorDashboardRouter() {
  return (
    <section className="section container">
      <Switch>
        <Route exact path="/creator" render={(({ match: { params: { id } } }) => <MyCreatorDashboardPage/>)}/>
        <Route path="/creator/:id" render={(({ match: { params: { id } } }) => <CreatorDashboardPage id={id} />)}/>
      </Switch>
    </section>
  );
}
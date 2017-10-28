import React from "react";

import { Route, Switch } from 'react-router-dom';
import SupporterDashboardPage from "./SupporterDashboardPage";

export default function SupporterRouter() {
  return (
    <section className="section container">
      <Switch>
        <Route path="/:id" render={(({ match: { params: { id } } }) => <SupporterDashboardPage id='my'/>)}/>
      </Switch>
    </section>
  );
}

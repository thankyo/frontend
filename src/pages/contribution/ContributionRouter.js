import React from "react";

import { Route, Switch } from 'react-router-dom';
import ContributionPage from "./ContributionPage";

export default function ContributionRouter() {
  return (
    <section className="section">
      <div className="container">
        <Switch>
          <Route path="/contribution/:id" render={(({ match: { params: { id } } }) => <ContributionPage id={id} />)}/>
        </Switch>
      </div>
    </section>
  );
}

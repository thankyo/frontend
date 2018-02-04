import React from "react";

import { Route, Switch } from 'react-router-dom';
import SearchDashboard from "./SearchDashboard";


export default function SearchRouter() {
  return (
    <section className="section container">
      <Switch>
        <Route path="/search">
          <SearchDashboard/>
        </Route>
      </Switch>
    </section>
  );
}

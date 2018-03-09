import React, { Fragment } from "react";

import { Route, Switch } from 'react-router-dom';
import SearchDashboard from "./SearchDashboard";
import SearchPanel from "./SearchPanel";


export default function SearchRouter() {
  return (
    <section className="section container">
      <Switch>
        <Route path="/search">
          <Fragment>
            <SearchPanel/>
            <SearchDashboard/>
          </Fragment>
        </Route>
      </Switch>
    </section>
  );
}

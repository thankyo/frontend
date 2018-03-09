import React, { Fragment } from "react";

import { Route, Switch } from 'react-router-dom';
import SearchResults from "./SearchResults";
import SearchPanel from "./SearchPanel";


export default function SearchRouter() {
  return (
    <Switch>
      <Route path="/search">
        <Fragment>
          <section className="section container">
            <SearchPanel/>
          </section>
          <section className="section container">
            <SearchResults/>
          </section>
        </Fragment>
      </Route>
    </Switch>
  );
}

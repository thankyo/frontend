import React, { Component, Fragment } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';

import NotFound from "./NotFound";

import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Navigation from "./Navigation";

import auth from "reducers/util/auth";

import LandingPage from "../pages/landing/LandingPage";

import AuthRouter from '../pages/auth/AuthRouter';

import LegalRouter from '../pages/legal/LegalRouter';

import DashboardRouter from "../pages/dashboard/DashboardRouter";
import CreatorDashboardRouter from "../pages/creator/CreatorDashboardRouter";
import SettingsRouter from "../pages/settings/SettingsRouter";

import SearchRouter from "../pages/search/SearchRouter";

export default class MainApp extends Component {
  render() {
    return (
      <Fragment>
        <Helmet/>
        <Switch>
          <Route exact path="/" render={props => (
            auth.restoreAuthentication() ? (
              <Redirect to={{
                pathname: '/dashboard/my',
                state: { from: props.location }
              }}/>
            ) : (
              <LandingPage/>
            )
          )}/>
          <Route path="/auth" component={AuthRouter}/>

          <Route path="/legal" component={LegalRouter}/>

          <Route path="/(creator|dashboard|settings|search)">
            <Fragment>
              <Navigation/>
              <Route path="/creator" component={CreatorDashboardRouter}/>
              <Route path="/dashboard" component={DashboardRouter}/>
              <Route path="/settings" component={SettingsRouter}/>
              <Route path="/search" component={SearchRouter}/>
            </Fragment>
          </Route>

          <Route component={NotFound}/>
        </Switch>
        <Switch>
          <Route exact path="/(|legal)"><Footer/></Route>
        </Switch>
      </Fragment>
    );
  }
}
import React, { Component, Fragment } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';

import NotFound from "./NotFound";

import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Navigation from "./Navigation";

import auth from "reducers/util/auth";

import SupporterLandingPage from "../pages/landing/SupporterLandingPage";
import CreatorLandingPage from "../pages/landing/CreatorLandingPage";

import AuthRouter from '../pages/auth/AuthRouter';

import LegalRouter from '../pages/legal/LegalRouter';

import AboutRouter from "../pages/about/AboutRouter";

import DashboardRouter from "../pages/dashboard/DashboardRouter";
import CreatorDashboardRouter from "../pages/creator/CreatorDashboardRouter";
import SettingsRouter from "../pages/settings/SettingsRouter";
import PostRouter from "../pages/post/PostRouter";

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
              <SupporterLandingPage/>
            )
          )}/>

          <Route path="/about" component={AboutRouter}/>

          <Route path="/landing/creator" component={CreatorLandingPage}/>

          <Route path="/auth" component={AuthRouter}/>
          <Route path="/legal" component={LegalRouter}/>

          <Route path="/(creator|dashboard|settings|search|post)">
            <Fragment>
              <Navigation/>
              <Route path="/creator" component={CreatorDashboardRouter}/>
              <Route path="/dashboard" component={DashboardRouter}/>
              <Route path="/settings" component={SettingsRouter}/>
              <Route path="/search" component={SearchRouter}/>
              <Route path="/post" component={PostRouter}/>
            </Fragment>
          </Route>

          <Route component={NotFound}/>
        </Switch>
        <Switch>
          <Route exact path="/"><Footer/></Route>
          <Route path="/(legal|landing|about)/"><Footer/></Route>
        </Switch>
      </Fragment>
    );
  }
}
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

import ContributionRouter from "../pages/contribution/ContributionRouter";
import CreatorRouter from "../pages/creator/CreatorRouter";
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
                pathname: '/contribution/my',
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

          <Route path="/(creator|contribution|settings|search|post)">
            <Fragment>
              <Navigation/>
              <Route path="/creator" component={CreatorRouter}/>
              <Route path="/contribution" component={ContributionRouter}/>
              <Route path="/settings" component={SettingsRouter}/>
              <Route path="/search" component={SearchRouter}/>
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
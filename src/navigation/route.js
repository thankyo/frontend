import React, { Component } from "react";
import Async from 'react-code-splitting';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import NotFound from "./NotFound";

import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Navigation from "./Navigation";

import auth from "reducers/util/auth";

const LandingPage = (props) => <Async load={import("../pages/landing/LandingPage")} componentProps={props}/>;

const AuthRouter = (props) => <Async load={import('../pages/auth/AuthRouter')} componentProps={props}/>;
const IntegrationRouter = (props) => <Async load={import("../pages/integration/IntegrationRouter")} componentProps={props}/>;

const TermsOfUse = (props) => <Async load={import('../pages/legal/TermsOfUsePage')} componentProps={props}/>;
const PrivacyPolicy = (props) => <Async load={import('../pages/legal/PrivacyPolicyPage')} componentProps={props}/>;

const DashboardRouter = (props) => <Async load={import("../pages/dashboard/DashboardRouter")} componentProps={props}/>;
const CreatorDashboardRouter = (props) => <Async load={import("../pages/creator/CreatorDashboardRouter")} componentProps={props}/>;
const SettingsRouter = (props) => <Async load={import("../pages/settings/SettingsRouter")} componentProps={props}/>;

const SearchRouter = (props) => <Async load={import("../pages/search/SearchDashboard")} componentProps={props}/>;

export default class MainApp extends Component {
  render() {
    return (
      <div>
        <Helmet>
        </Helmet>
        <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
          <div>
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
              <Route path="/integration" component={IntegrationRouter}/>

              <Route path="/legal/terms" component={TermsOfUse}/>
              <Route path="/legal/privacy" component={PrivacyPolicy}/>

              <Route path="/(creator|dashboard|settings|search)">
                <div>
                  <Navigation/>
                  <div style={{ paddingTop: 62 }}>
                    <Route path="/creator" component={CreatorDashboardRouter}/>
                    <Route path="/dashboard" component={DashboardRouter}/>
                    <Route path="/settings" component={SettingsRouter}/>
                    <Route path="/search" component={SearchRouter}/>
                  </div>
                </div>
              </Route>

              <Route component={NotFound}/>
            </Switch>
            <Switch>
              <Route exact path="/">
                <Footer/>
              </Route>
              <Route path="/legal">
                <Footer/>
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
import React, { Component } from "react";
import Async from 'react-code-splitting';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import NotFound from "./NotFound";

import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Navigation from "./Navigation";

import auth from "../reducers/util/auth";

const LandingPage = (props) => <Async load={import("../pages/landing/LandingPage")} componentProps={props}/>;

const AuthRouter = (props) => <Async load={import('../pages/auth/AuthRouter')} componentProps={props}/>;
const IntroRouter = (props) => <Async load={import("../pages/introduction/IntroRouter")} componentProps={props}/>;
const IntegrationRouter = (props) => <Async load={import("../pages/integration/IntegrationRouter")} componentProps={props}/>;

const TermsOfUse = (props) => <Async load={import('../pages/legal/TermsOfUsePage')} componentProps={props}/>;
const PrivacyPolicy = (props) => <Async load={import('../pages/legal/PrivacyPolicyPage')} componentProps={props}/>;

const SupporterRouter = (props) => <Async load={import("../pages/supporter/SupporterRouter")} componentProps={props}/>;
const CreatorDashboard = (props) => <Async load={import("../pages/creator/CreatorDashboardPage")} componentProps={props}/>;
const SettingsRouter = (props) => <Async load={import("../pages/settings/SettingsRouter")} componentProps={props}/>;

const LINKS = [
  { pathname: "/supporter/my", name: "Supporter", icon: "fa fa-user-circle-o" },
  { pathname: "/creator/my", name: "Creator", icon: "fa fa-paint-brush" },
  { pathname: "/settings", name: "Settings", icon: "fa fa-cogs" },
  { pathname: "/settings/limit", name: "Limits", isHiddenDesktop: true },
  { pathname: "/settings/charge", name: "Charge", isHiddenDesktop: true },
  { pathname: "/settings/payout", name: "Payout", isHiddenDesktop: true },
];

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
                    pathname: '/supporter/my',
                    state: { from: props.location }
                  }}/>
                ) : (
                  <LandingPage/>
                )
              )}/>
              <Route path="/auth" component={AuthRouter}/>
              <Route path="/intro" component={IntroRouter}/>
              <Route path="/integration" component={IntegrationRouter}/>

              <Route path="/legal/terms" component={TermsOfUse}/>
              <Route path="/legal/privacy" component={PrivacyPolicy}/>

              <Route path="/(creator|supporter|settings)">
                <div>
                  <Navigation links={LINKS}/>
                  <div style={{ paddingTop: 62 }}>
                    <Route path="/creator/:id" component={CreatorDashboard}/>
                    <Route path="/supporter" component={SupporterRouter}/>
                    <Route path="/settings" component={SettingsRouter}/>
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
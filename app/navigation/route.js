import React, {Component} from "react";
import Async from 'react-code-splitting';

import LandingPageDefault from "../pages/landing/LandingPage";
import FacebookAuthPage from "../pages/landing/FacebookAuthPage";
import NotFound from "./NotFound";

const TermsOfUse = (props) => <Async load={import('../pages/legal/TermsOfUsePage')} componentProps={props}/>;
const PrivacyPolicy = (props) => <Async load={import('../pages/legal/PrivacyPolicyPage')} componentProps={props}/>;
const RoadMap = (props) => <Async load={import('../pages/roadmap/RoadMapPage')} componentProps={props}/>;

const SupporterDashboard = (props) => <Async load={import("../pages/supporter/SupporterDashboardPage")} componentProps={props}/>;
const CreatorDashboard = (props) => <Async load={import("../pages/creator/CreatorDashboardPage")} componentProps={props}/>;

import authService from "../reducers/util/auth";
import {browserHistory, Route, Router} from "react-router";

import { Helmet } from "react-helmet";

const HOME = "/supporter/my";

if (authService.isAuthenticated() && window.location.pathname === "/") {
  browserHistory.push(HOME);
}

export default class MainApp extends Component {
    render() {
        return (
            <div>
                <Helmet>
                </Helmet>
                <Router history={this.props.history} onUpdate={() => window.scrollTo(0, 0)}>

                    <Route path="/" component={LandingPageDefault}/>

                    <Route path="/auth/facebook" components={FacebookAuthPage} />

                    <Route path="/legal/terms" component={ TermsOfUse }/>
                    <Route path="/legal/privacy" component={ PrivacyPolicy }/>
                    <Route path="/roadmap" component={RoadMap}/>

                    <Route path="/creator/:id" components={CreatorDashboard}/>

                    <Route path="/supporter/:id" components={SupporterDashboard}/>

                    <Route path="*" component={NotFound}/>
                </Router>
            </div>
        );
    }
}
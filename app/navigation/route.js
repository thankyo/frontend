import React, {Component} from "react";

import LandingPageDefault from "../pages/landing/LandingPage";

import TermsOfUse from "../pages/legal/TermsOfUsePage";
import PrivacyPolicy from "../pages/legal/PrivacyPolicyPage";
import RoadMap      from "../pages/roadmap/RoadMapPage";


import SupporterDashboard from "../pages/supporter/SupporterDashboardPage";
import CreatorDashboard from "../pages/creator/CreatorDashboardPage";

import FacebookAuthPage from "../pages/landing/FacebookAuthPage";

import authService from "../reducers/util/auth";
import {browserHistory, Route, Router} from "react-router";

import NotFound from "./NotFound";

import {Helmet} from "react-helmet";

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
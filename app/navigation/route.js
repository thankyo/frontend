import React, {Component} from "react";

import LandingPageDefault from "../landing/LandingPage";

import TermsOfUse from "../general/legal/TermsOfUsePage";
import PrivacyPolicy from "../general/legal/PrivacyPolicyPage";
import RoadMap      from "../general/roadmap/RoadMapPage";

import NotFound from "./NotFound";
import PaymentPage from "../payment/PaymentPage";

import IntegrationPage from "../integration/IntegrationPage";
import SupporterDashboard from "../dashboard/UserDashboardPage";
import CreatorDashboard from "../dashboard/CreatorDashboardPage";

import FacebookAuthPage from "../landing/FacebookAuthPage";

import authService from "../service/auth";
import {browserHistory, Route, Router} from "react-router";
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
                    <Route path="/creator/:id/integration" component={ IntegrationPage }/>

                    <Route path="/supporter/:id" components={SupporterDashboard}/>
                    <Route path="/supporter/:id/payment" component={ PaymentPage }/>

                    <Route path="*" component={NotFound}/>
                </Router>
            </div>
        );
    }
}
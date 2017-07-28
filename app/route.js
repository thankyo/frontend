import React, {Component} from "react";

import CreatorDefaultLandingPage from "landing/creator/default/LandingPage";
import CreatorLandingPageA from "landing/creator/A/LandingPage";
import CreatorLandingPageB from "landing/creator/B/LandingPage";

import LandingPageDefault from "landing/contributor/default/LandingPage";
import LandingPageA from "landing/contributor/A/LandingPage";
import LandingPageB from "landing/contributor/B/LandingPage";

import TermsOfUse from "legal/TermsOfUsePage";
import PrivacyPolicy from "legal/PrivacyPolicyPage";
import RoadMap      from "landing/roadmap/RoadMapPage";

import NotFound from "NotFound";
import PaymentPage from "payment/PaymentPage";

import IntroductionPage from "./introduction/IntroductionPage";
import IntegrationPage from "./integration/IntegrationPage";
import UserDashboard from "./dashboard/UserDashboardPage";

import FacebookAuthPage from "./auth/FacebookAuthPage";

import authService from "service/auth";
import {browserHistory, Route, Router} from "react-router";
import {HOME} from "service/routes";
import {Helmet} from "react-helmet";

if (authService.isAuthenticated() && window.location.pathname === "/")
    browserHistory.push(HOME);

export default class MainApp extends Component {
    render() {
        return (
            <div>
                <Helmet>
                </Helmet>
                <Router history={this.props.history} onUpdate={() => window.scrollTo(0, 0)}>

                    <Route path="/" component={LandingPageDefault}/>
                    <Route path="/A" component={LandingPageA}/>
                    <Route path="/B" component={LandingPageB}/>
                    <Route path="/default" component={LandingPageDefault}/>

                    <Route path="/creator" component={CreatorDefaultLandingPage}/>
                    <Route path="/creator/A" component={CreatorLandingPageA}/>
                    <Route path="/creator/B" component={CreatorLandingPageB}/>

                    <Route path="/auth/facebook" components={FacebookAuthPage} />

                    <Route path="/legal/terms" component={ TermsOfUse }/>
                    <Route path="/legal/privacy" component={ PrivacyPolicy }/>
                    <Route path="/roadmap" component={RoadMap}/>

                    <Route path="/user/:id" components={UserDashboard}/>
                    <Route path="/user/:id/payment" component={ PaymentPage }/>
                    <Route path="/user/:id/integration" component={ IntegrationPage }/>
                    <Route path="*" component={NotFound}/>
                </Router>
            </div>
        );
    }
}
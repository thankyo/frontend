import React, {Component} from "react";

import CreatorDefaultLandingPage from "landing/creator/default/LandingPage";
import CreatorLandingPageA from "landing/creator/A/LandingPage";
import CreatorLandingPageB from "landing/creator/B/LandingPage";

import TermsOfUse from "legal/TermsOfUsePage";
import PrivacyPolicy from "legal/PrivacyPolicyPage";
import {browserHistory, Route, Router} from "react-router";

import LandingPageDefault from "landing/contributor/default/LandingPage";
import LandingPageA from "landing/contributor/A/LandingPage";
import LandingPageB from "landing/contributor/B/LandingPage";

import RoadMap      from "landing/roadmap/RoadMapPage";

import NotFound from "NotFound";
import PaymentPage from "payment/PaymentPage";
import LimitPage from 'payment/LimitPage';
import ChargeAccountPage from 'payment/ChargeAccountPage';

import Love from "thank/Love";
import ResourcePage from "thank/resource/ResourcePage";
import authService from "service/auth";

import IntroductionPage from "./introduction/IntroductionPage";
import IntegrationPage from "./integration/IntegrationPage";

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

                    <Route path="/roadmap" component={RoadMap}/>

                    <Route path="/:id/love" component={ Love }/>
                    <Route path="/:id/payment" component={ PaymentPage }/>
                    <Route path="/:id/payment/limit" component={ LimitPage }/>
                    <Route path="/:id/payment/charge/account" component={ ChargeAccountPage }/>
                    <Route path="/:id/thank/resource" component={ ResourcePage }/>
                    <Route path="/:id/integration" component={ IntegrationPage }/>

                    <Route path="/my" components={IntroductionPage}/>
                    <Route path="/introduction" components={IntroductionPage}/>
                    <Route path="/legal/terms" component={ TermsOfUse }/>
                    <Route path="/legal/privacy" component={ PrivacyPolicy }/>
                    <Route path="*" component={NotFound}/>
                </Router>
            </div>
        );
    }
}
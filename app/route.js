import React, {Component} from "react";

import CreatorDefaultLandingPage from "components/landing/creator/default/LandingPage";
import CreatorLandingPageA from "components/landing/creator/A/LandingPage";
import CreatorLandingPageB from "components/landing/creator/B/LandingPage";

import TermsOfUse from "components/legal/TermsOfUsePage";
import PrivacyPolicy from "components/legal/PrivacyPolicyPage";
import {browserHistory, Route, Router} from "react-router";

import LandingPageDefault from "components/landing/contributor/default/LandingPage";
import LandingPageA from "components/landing/contributor/A/LandingPage";
import LandingPageB from "components/landing/contributor/B/LandingPage";

import RoadMap      from "components/landing/roadmap/RoadMapPage";

import Documentation from "components/documentation/DocumentationPage";
import NotFound from "pages/NotFound";
import Payments from "components/payment/PaymentPage";
import Love from "components/thank/Love";
import Owns from "components/thank/Owns";
import authService from "service/auth";

import Introduction from "./components/introduction/CreatorIntroductionPage";

import {HOME} from "service/routes";
import {Helmet} from "react-helmet";

if (authService.isAuthenticated() && window.location.pathname === "/")
    browserHistory.push(HOME);

export default class MainApp extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <html lang="en" amp />
                    <meta charSet="utf-8"/>
                </Helmet>
                <Router history={this.props.history} onUpdate={() => window.scrollTo(0, 0)}>
                    <Route path="/" component={LandingPageDefault}/>
                    <Route path="/A" component={LandingPageA}/>
                    <Route path="/B" component={LandingPageB}/>
                    <Route path="/creator" component={CreatorDefaultLandingPage}/>
                    <Route path="/creator/A" component={CreatorLandingPageA}/>
                    <Route path="/creator/B" component={CreatorLandingPageB}/>
                    <Route path="/roadmap" component={RoadMap}/>
                    <Route path="/documentation" component={ Documentation }/>
                    <Route path="/:id/love" component={ Love }/>
                    <Route path="/:id/payment" component={ Payments }/>
                    <Route path="/:id/own" component={ Owns }/>
                    <Route path="/my" components={Introduction}/>
                    <Route path="/introduction" components={Introduction}/>
                    <Route path="/legal/terms" component={ TermsOfUse }/>
                    <Route path="/legal/privacy" component={ PrivacyPolicy }/>
                    <Route path="*" component={NotFound}/>
                </Router>
            </div>
        );
    }
}
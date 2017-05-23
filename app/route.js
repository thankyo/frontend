import React, {Component} from "react";

import CreatorLandingPage from "components/landing/creator/LandingPage";

import TermsOfUse from "components/legal/TermsOfUsePage";
import PrivacyPolicy from "components/legal/PrivacyPolicyPage";
import {browserHistory, Route, Router} from "react-router";

import ContributorLandingPage from "components/landing/contributor/base/LandingPage";
import LandingPageA from "components/landing/contributor/A/LandingPage";
import LandingPageB from "components/landing/contributor/B/LandingPage";
import LandingPageC from "components/landing/contributor/C/LandingPage";

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
                    <title>Love.it</title>
                    <meta name="viewport" content="width=device-width"/>
                    <meta name="google-site-verification" content="VXBRnbM3Jh54uR-jHjoHSrmu0UM78IKma7FDtydCPnk"/>
                    <meta name="description" content="Love.it microtips platform"/>
                    <meta name="keywords" content="donation,microtip,microdonation"/>
                    <link rel="shortcut icon" type="image/x-icon" href="favicon.png"></link>
                </Helmet>
                <Router history={this.props.history} onUpdate={() => window.scrollTo(0, 0)}>
                    <Route path="/" component={ContributorLandingPage}/>
                    <Route path="/A" component={LandingPageA}/>
                    <Route path="/B" component={LandingPageB}/>
                    <Route path="/C" component={LandingPageC}/>
                    <Route path="/creator" component={CreatorLandingPage}/>
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
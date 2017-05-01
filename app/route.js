import React, {Component} from "react";

import {browserHistory, Route, Router} from "react-router";
import TermsOfUse from "pages/TermsOfUse";
import Landing from "components/landing/LandingPage";
import CreatorPage from "components/landing/CreatorPage";
import Documentation from "components/documentation/DocumentationPage";
import PrivacyPolicy from "pages/PrivacyPolicy";
import NotFound from "pages/NotFound";
import Payments from "pages/Payments";
import Love from "components/thank/Love";
import Owns from "pages/Owns";
import authService from "service/auth";

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
                    <Route path="/" component={Landing}/>
                    <Route path="/creator" component={CreatorPage}/>
                    <Route path="/documentation" component={ Documentation }/>
                    <Route path="/:id/love" component={ Love }/>
                    <Route path="/:id/payment" component={ Payments }/>
                    <Route path="/:id/own" component={ Owns }/>
                    <Route path="/legal/terms" component={ TermsOfUse }/>
                    <Route path="/legal/privacy" component={ PrivacyPolicy }/>
                    <Route path="*" component={NotFound}/>
                </Router>
            </div>
        );
    }
}
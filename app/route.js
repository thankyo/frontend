import React, {Component} from "react";

import {Route, Router} from "react-router";

import TermsOfUse from "pages/TermsOfUse";
import Landing from "pages/Landing";
import Documentation from "pages/Documentation";
import PrivacyPolicy from "pages/PrivacyPolicy";
import NotFound         from "pages/NotFound";
import Payments         from "pages/Payments";
import Love             from "pages/Love";
import Owns             from "pages/Owns";

import {browserHistory} from "react-router";
import authService from "service/auth";

import { HOME }         from "service/routes";

if (authService.isAuthenticated() && window.location.pathname === "/")
    browserHistory.push(HOME);

export default class MainApp extends Component {
    render() {
        return (
            <Router history={this.props.history} onUpdate={() => window.scrollTo(0, 0)}>
                <Route path="/" component={Landing}/>
                <Route path="/documentation" component={ Documentation }/>
                <Route path="/:id/love" component={ Love }/>
                <Route path="/:id/payment" component={ Payments }/>
                <Route path="/:id/own" component={ Owns }/>
                <Route path="/legal/terms" component={ TermsOfUse }/>
                <Route path="/legal/privacy" component={ PrivacyPolicy }/>
                <Route path="*" component={NotFound}/>
            </Router>
        );
    }
}
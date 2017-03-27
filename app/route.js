import React, {Component} from "react";

import {Route, Router} from "react-router";

import TermsOfUse from "pages/TermsOfUse";
import Landing from "pages/Landing";
import Dashboard from "pages/Dashboard";
import Documentation from "pages/Documentation";
import PrivacyPolicy from "pages/PrivacyPolicy";

import {browserHistory} from "react-router";
import authService from "service/auth";

if (authService.isAuthenticated() && window.location.pathname === "/")
    browserHistory.push("/dashboard");

export default class MainApp extends Component {
    render() {
        return (
            <Router history={this.props.history} onUpdate={() => window.scrollTo(0, 0)}>
                <Route path="/" component={Landing}/>
                <Route path="/dashboard" component={ Dashboard }/>
                <Route path="/documentation" component={ Documentation }/>
                <Route path="/legal/terms" component={ TermsOfUse }/>
                <Route path="/legal/privacy" component={ PrivacyPolicy }/>
            </Router>
        );
    }
}
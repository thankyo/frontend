import React, {Component} from "react";

import { Router, Route, browserHistory } from 'react-router';

import Join           from 'pages/Join';
import TermsOfUse     from 'pages/TermsOfUse';
import Landing        from 'pages/Landing';
import Dashboard      from 'pages/Dashboard';
import Leave          from 'pages/Leave';
import Documentation  from 'pages/Documentation';
import PrivacyPolicy  from 'pages/PrivacyPolicy';

export default class MainApp extends Component {
    render() {
        return (
            <div>
                <Router history={this.props.history} onUpdate={() => window.scrollTo(0, 0)}>
                    <Route path="/" component={Landing}/>
                    <Route path="/dashboard" component={ Dashboard }/>
                    <Route path="/documentation" component={ Documentation }/>
                    <Route path="/leave" component={ Leave }/>
                    <Route path="/join" component={ Join }/>
                    <Route path="/legal/terms" component={ TermsOfUse }/>
                    <Route path="/legal/privacy" component={ PrivacyPolicy }/>
                </Router>
            </div>
        );
    }
}
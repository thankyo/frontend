import React, {Component} from "react";

import { Router, Route, browserHistory } from 'react-router';

import App            from 'components/App';
import Documentation  from 'components/documentation/Documentation';
import Join           from 'components/join/Join';

import TermsOfUse     from 'components/legal/TermsOfUse';
import PrivacyPolicy  from 'components/legal/PrivacyPolicy';

import Dashboard      from 'pages/Dashboard';

export default class MainApp extends Component {
    render() {
        return (
            <div>
                <Router history={this.props.history} onUpdate={() => window.scrollTo(0, 0)}>
                    <Route path="/" component={App}/>
                    <Route path="/dashboard" component={ Dashboard }/>
                    <Route path="/documentation" component={ Documentation }/>
                    <Route path="/join" component={ Join }/>
                    <Route path="/legal/terms" component={ TermsOfUse } />
                    <Route path="/legal/privacy" component={ PrivacyPolicy } />
                </Router>
            </div>
        );
    }
}
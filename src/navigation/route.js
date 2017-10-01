import React, {Component} from "react";
import Async from 'react-code-splitting';

import FacebookAuthPage from "../pages/landing/FacebookAuthPage";
import LandingPageDefault from "../pages/landing/LandingPage";
import NotFound from "./NotFound";


const TermsOfUse = (props) => <Async load={import('../pages/legal/TermsOfUsePage')} componentProps={props}/>;
const PrivacyPolicy = (props) => <Async load={import('../pages/legal/PrivacyPolicyPage')} componentProps={props}/>;
const RoadMap = (props) => <Async load={import('../pages/roadmap/RoadMapPage')} componentProps={props}/>;

const SupporterDashboard = (props) => <Async load={import("../pages/supporter/SupporterDashboardPage")} componentProps={props}/>;
const CreatorDashboard = (props) => <Async load={import("../pages/creator/CreatorDashboardPage")} componentProps={props}/>;
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Helmet } from "react-helmet";

export default class MainApp extends Component {
    render() {
        return (
            <div>
                <Helmet>
                </Helmet>
                <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
                  <Switch>
                    <Route exact path="/" component={LandingPageDefault}/>

                    <Route path="/auth/facebook"  component={FacebookAuthPage} />

                    <Route path="/legal/terms" component={ TermsOfUse }/>
                    <Route path="/legal/privacy" component={ PrivacyPolicy }/>
                    <Route path="/roadmap" component={RoadMap}/>

                    <Route path="/creator/:id" component={CreatorDashboard}/>

                    <Route path="/supporter/:id" component={SupporterDashboard}/>

                    <Route component={NotFound}/>
                  </Switch>
                </BrowserRouter>
            </div>
        );
    }
}
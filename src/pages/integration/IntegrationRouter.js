import React from "react";
import VerificationPage from "./VerificationPage";

import { Route, Switch } from 'react-router-dom';
import { Steps, StepNavigation } from "../../common/Steps";

const LINKS = [
];

export default function IntroRouter() {
  return (
    <section className="hero is-fullheight is-primary has-text-centered">
      <div className="hero-head">
        <br/>
        <Route path="/integration/:step?" component={({ match: { params: { step = 0 } } }) => <Steps links={LINKS} step={step}/>}/>
      </div>
      <div className="hero-body">
        <div className="container">
          <Switch>
            <Route exact path="/integration">
              <VerificationPage/>
            </Route>
          </Switch>
        </div>
      </div>
      <div className="hero-foot">
        <Route path="/integration/:step?" component={({ match: { params: { step = 0 } } }) => <StepNavigation links={LINKS} step={step}/>}/>
        <br/>
      </div>
    </section>
  );
}
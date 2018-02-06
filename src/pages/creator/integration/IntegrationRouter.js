import React from "react";
import SpecifyResourcePage from "./SpecifyResourcePage";
import SelectPlatformPage from "./SelectPlatformPage";
import IntegratePlatformPage from "./IntegratePlatformPage";
import EmbedButtonPage from "./EmbedButtonPage";
import DonePage from "./DonePage";

import { Route, Switch } from 'react-router-dom';
import { Steps, StepNavigation } from "components/Steps";

const LINKS = [
  { title: "Specify Resource", complete: false, pathname: "/integration" },
  { title: "Choose Platform", complete: false, pathname: "/integration/1" },
  { title: "Integrate Platform", complete: false, pathname: "/integration/2" },
  { title: "Embed button", complete: false, pathname: "/integration/3" },
  { title: "Done", complete: false, pathname: "/integration/4" },
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
              <SpecifyResourcePage/>
            </Route>
            <Route exact path="/integration/1">
              <IntegratePlatformPage/>
            </Route>
            <Route exact path="/integration/2">
              <SelectPlatformPage/>
            </Route>
            <Route exact path="/integration/3">
              <EmbedButtonPage/>
            </Route>
            <Route exact path="/integration/4">
              <DonePage/>
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
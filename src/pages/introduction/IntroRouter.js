import React from "react";
import { getLimit } from "../../reducers/payment/limit.actions";
import { connect } from "react-redux";

import { Route, Switch } from 'react-router-dom';
import AboutPage from "./AboutPage";
import LimitPage from "./LimitPage";
import DonePage from "./DonePage";
import { Steps, StepNavigation } from "../../common/Steps";

const LINKS = [
  { title: "About", complete: false, pathname: "/intro" },
  { title: "Limits", complete: false, pathname: "/intro/1" },
  { title: "Done", complete: false, pathname: "/intro/2" }
];

function IntroRouter() {
  return (
    <section className="hero is-fullheight is-primary has-text-centered">
      <div className="hero-head">
        <br/>
        <Route path="/intro/:step?" component={({ match: { params: { step = 0 } } }) => <Steps links={LINKS} step={step}/>}/>
      </div>
      <div className="hero-body">
        <div className="container">
          <Switch>
            <Route exact path="/intro">
              <AboutPage/>
            </Route>
            <Route path="/intro/1">
              <LimitPage/>
            </Route>
            <Route path="/intro/2" component={DonePage}/>
          </Switch>
        </div>
      </div>
      <div className="hero-foot">
        <Route path="/intro/:step?" component={({ match: { params: { step = 0 } } }) => <StepNavigation links={LINKS} step={step}/>}/>
        <br/>
      </div>
    </section>
  );
}


const mapDispatchToProps = (dispatch) => {
  dispatch(getLimit());
  return {}
};

export default connect(
  undefined,
  mapDispatchToProps
)(IntroRouter);
import React from "react";

import { Link, Route, Switch } from 'react-router-dom';
import Icon from "../../common/Icon";
import AboutPage from "./AboutPage";
import LimitPage from "./LimitPage";
import DonePage from "./DonePage";

function StepLink({ complete, title, pathname }) {
  let active = location.pathname === pathname;
  let icon = complete ? "check" : active ? "circle-o" : "none";
  return (
    <div className={`step-item ${complete ? "is-completed" : "is-active"} is-primary `}>
      <Link to={pathname}>
        <div className="step-marker">
          <Icon fa={icon}/>
        </div>
        <div className="step-details">
          <br/>
          <br/>
          <p className="step-title">{title}</p>
        </div>
      </Link>
    </div>
  );
}

const LINKS = [
  { title: "About", complete: false, pathname: "/intro" },
  { title: "Limits", complete: false, pathname: "/intro/1" },
  { title: "Done", complete: false, pathname: "/intro/2" }
];

function Steps({ match: { params: { step = 0 } }, links }) {
  links = LINKS.map((link, i) => Object.assign(link, { active: i === parseInt(step), complete: parseInt(i) < step }));
  return (
    <div className="steps has-text-centered">
      {links.map((linkConf, i) => <StepLink key={i} {...linkConf}/>)}
    </div>
  )
}

function Next({ match: { params: { step = 0 } } }) {
  const stepInt = parseInt(step);
  const nextStep = stepInt + 1;
  const prevStep = stepInt - 1;

  return (
    <div>
      {prevStep >= 0 && nextStep < LINKS.length &&
        <Link to={LINKS[prevStep].pathname} className="button is-primary is-inverted is-outlined">
          <span className="icon"><i className="fa fa-chevron-left"/></span><span>Back</span>
        </Link>
      }
      &nbsp;
      {nextStep < LINKS.length &&
        <Link to={LINKS[nextStep].pathname} className="button is-primary is-inverted is-outlined">
          <span>Next</span><span className="icon"><i className="fa fa-chevron-right"/></span>
        </Link>
      }
    </div>
  )
}

export default function IntroRouter() {
  return (
    <section className="hero is-fullheight is-primary has-text-centered">
      <div className="hero-head">
        <br/>
        <Route path="/intro/:step?" component={Steps}/>
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
        <Route path="/intro/:step?" component={Next}/>
        <br/>
      </div>
    </section>
  );
}

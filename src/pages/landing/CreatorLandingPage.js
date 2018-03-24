import React, { Component, Fragment } from "react";

import Hero from "./creator/Hero";
import Join from "./creator/Join";
import HowItWorks from "./creator/HowItWorks";
import WhatYouGet from "./creator/WhatYouGet";
import About from "./creator/About";
import SkepticZone from "./creator/SkepticZone";

export default class CreatorLandingPage extends Component {
  render() {
    return (
      <Fragment>
        <Hero/>
        <section className="section hero has-text-centered about-project about-project-white">
          <div className="hero-body">
            <div className="container">
              <h2 className="subtitle is-3">Every person can be happy</h2>
            </div>
          </div>
        </section>
        <WhatYouGet/>
        <section className="section hero has-text-centered about-project about-project-white">
          <div className="hero-body">
            <div className="container">
              <h3 className="subtitle is-3">We are happy, when we are doing what we love</h3>
            </div>
          </div>
        </section>
        <HowItWorks/>
        <section className="section hero has-text-centered about-project about-project-white">
          <div className="hero-body">
            <div className="container">
              <h3 className="subtitle is-3">Loveit is here to support you</h3>
            </div>
          </div>
        </section>
        <Join/>
        <SkepticZone/>
      </Fragment>
    );
  }
}
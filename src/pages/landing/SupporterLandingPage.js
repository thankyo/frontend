import React, { Component, Fragment } from "react";

import Hero from "./supporter/Hero";
import Join from "./supporter/Join";
import HowItWorks from "./supporter/HowItWorks";
import About from "./supporter/About";
import Metaphor from "./supporter/Metaphor";
import SkepticZone from "./supporter/SkepticZone";

export default class SupporterLandingPage extends Component {
  render() {
    return (
      <Fragment>
        <Hero/>
        <About/>
        <HowItWorks/>
        <Join/>
        <SkepticZone/>
      </Fragment>
    );
  }
}
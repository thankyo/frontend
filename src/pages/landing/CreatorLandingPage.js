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
        <About/>
        <WhatYouGet/>
        <HowItWorks/>
        <Join/>
        <SkepticZone/>
      </Fragment>
    );
  }
}
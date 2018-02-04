import React, { Component } from "react";

import Hero from "./section/Hero";
import Join from "./section/Join";
import HowItWorks from "./section/HowItWorks";
import About from "./section/About";
import Metaphor from "./section/Metaphor";
import SkepticZone from "./section/SkepticZone";

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <Hero/>
        <About/>
        <HowItWorks/>
        <Metaphor/>
        <Join/>
        <SkepticZone/>
      </div>
    );
  }
}
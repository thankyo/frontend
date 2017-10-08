import React, { Component } from "react";

import Hero from "./Hero";
import Join from "./Join";
import HowItWorks from "./HowItWorks";
import About from "./About";
import Metaphor from "./Metaphor";
import SkepticZone from "./SkepticZone";

export default class Contributor extends Component {
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
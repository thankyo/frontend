import React, { Component } from "react";

import Hero from "./components/Hero";
import Join from "./components/Join";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";
import Metaphor from "./components/Metaphor";
import SkepticZone from "./components/SkepticZone";

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
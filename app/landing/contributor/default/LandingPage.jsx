import React, { Component } from "react";

import Hero from "landing/Hero";
import Join from "landing/Join";
import Proofs from "landing/Proofs";
import NotReadyToJoin from "landing/NotReadyToJoin";
import Footer from "components/Footer";
import HowItWorks from "../HowItWorks";
import Idea from "../Idea";
import SkepticZone from "../SkepticZone";

let Metaphor = () => (
  <section className="section hero is-info has-text-centered">
    <div className="hero-body">
      <div className="container">
        <h2 className="subtitle">Basically it's <strong>like saying</strong></h2>
        <h2 className="title"><strong>I love what you do</strong> and here is small token of my support</h2>
      </div>
    </div>
  </section>
);

export default class Contributor extends Component {
  render() {
    return (
      <div>
        <Hero
          image="contributor/default/Hero.jpg"
          title="Support creators with a single click"
          button="Join"
        />
        <Idea/>
        <HowItWorks/>
        <Metaphor/>
        <Join
          image="contributor/default/Hero.jpg"
          title="Support creativity"
          subtitle="Just a dime, every time"
          button="Join"
        />
        <SkepticZone/>
        <Join
          image="contributor/default/Hero.jpg"
          title="Support creativity"
          subtitle="Just a dime, every time"
          button="Join"
        />
        <Footer/>
      </div>
    );
  }
}
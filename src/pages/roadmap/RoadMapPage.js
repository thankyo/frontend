import React, { Component } from "react";

import Hero from "./Hero";
import RoadMapItem from "./RoadMapItem";

export default class RoadMapPage extends Component {
  render() {
    return (
      <div>
        <Hero/>
        <RoadMapItem/>
      </div>
    );
  }
}
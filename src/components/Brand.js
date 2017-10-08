import React, { Component } from "react";
import Logo from './logo.svg';

export default class Brand extends Component {
  render() {
    return (
      <div className="nav-left">
        <div className="nav-item is-brand">
          <Logo width={100} height={40} alt="LoveIt logotype"/>
        </div>
      </div>
    )
  }
}
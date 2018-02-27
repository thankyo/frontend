import React, { Component } from "react";
import Logo from './logo.svg';

export default class Brand extends Component {
  render() {
    return (
      <Logo width={38} height={38} alt="LoveIt logotype" className="fab-is-loved"/>
    )
  }
}
import React, { Component } from "react";
import Navigation from "./Navigation";

export default class NotFound extends Component {
  render() {
    let emailContact = `mailto:antono@loveit.tips?subject=404 on ${location.host}/${location.pathname}`
    return (
      <div>
        <Navigation/>
        <div className="section">
          <div className="container has-text-centered">
            <p className="title">404</p>
            <p className="subtitle">You can be proud of yourself, you broke it.</p>
            If this is something important <a href={emailContact}>contact us</a>, we'll take a look.
          </div>
        </div>
      </div>
    );
  }
}
import React, { Component } from "react";

export default class Idea extends Component {
  render() {
    return (
      <section className="section is-fullheight hero is-info has-text-centered">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">What</h1>
            <br/>
            <h2 className="subtitle">
              <strong>Loveit</strong> is a <strong>micro donation platform</strong> that allows you to support creators everywhere with a single click.
              <br/>
            </h2>
            <h2 className="subtitle">
              <strong>Micro donation</strong> - is a small fixed amount, which is really <strong>just a dime</strong>.
            </h2>
            <h2 className="subtitle">
              This is the <strong>easiest and most effective way to give back</strong> to creators all around the world.
            </h2>
            <h2 className="subtitle">
              Basically it's <strong>like saying</strong>
            </h2>
            <h2 className="subtitle">
              I love the thing you do, and I want to <strong>support you</strong>.
            </h2>
          </div>
        </div>
      </section>
    )
  }
}

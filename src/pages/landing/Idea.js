import React, { Component } from "react";
import Icon from "../components/Icon";

export default class Idea extends Component {
  render() {
    return (
      <section className="section hero is-info has-text-centered">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">What is Loveit</h1>
            <br/>
            <div className="columns">
              <div className="column is-one-third">
                <Icon fa="thumbs-o-up" size="large"/>
                <br/>
                <br/>
                <h2 className="subtitle">
                  <strong>Loveit</strong> is a <strong>microtip platform</strong> that allows you to support creators
                  everywhere with a single click.<br/>
                  It <strong>works the same way as Facebook Like</strong>, but you know with a bit more meaning.
                  <br/>
                </h2>
              </div>
              <div className="column is-one-third">
                <Icon fa="circle-thin" size="large"/>
                <br/>
                <br/>
                <h2 className="subtitle">
                  <strong>Microtip</strong> - is a small fixed amount, which is really <strong>just a dime</strong>.
                  It's made small on purpose, so that you could use it without harming your budget.
                </h2>
              </div>
              <div className="column is-one-third">
                <Icon fa="hand-peace-o" size="large"/>
                <br/>
                <br/>
                <h2 className="subtitle">
                  This is the <strong>easiest and most effective way to give back</strong> to creators all around the world.
                  Supporting creative freedom we make world a better place.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

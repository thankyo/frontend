import React, { Component } from "react";
import Icon from "../../components/Icon";

export default class HowItWorks extends Component {
  render() {
    return (
      <section className="section hero has-text-centered">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">How this works</h1>
            <div className="columns">
              <div className="column is-one-third">
                <Icon fa="heart-o" size="large"/>
                <br/>
                <br/>
                <h2 className="subtitle">
                  Creators put <strong>Loveit button</strong> on their page<br/>
                  On every piece he creates.<br/>
                  It can be a song, poem, photo, blog, basically any content on the web can have this button.
                </h2>
              </div>
              <div className="column is-one-third">
                <Icon fa="heart" size="large"/>
                <br/>
                <br/>
                <h2 className="subtitle">
                  Whenever <strong>you click it</strong>, we register your tip.<br/>
                  We track your support throughout the month and charge you total at the end of the month.
                  <br/>
                </h2>
              </div>
              <div className="column is-one-third">
                <Icon fa="calendar" size="large"/>
                <br/>
                <br/>
                <h2 className="subtitle">
                  At the end of the month <strong>creator gets paid</strong>.<br/>
                  <strong>You are in full control of how much you spend</strong>.<br/>
                  Set a limit per month and we won't charge you more, than that.
                </h2>
              </div>
            </div>
            <br/>
          </div>
        </div>
      </section>
    )
  }
}
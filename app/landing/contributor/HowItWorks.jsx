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
                  <strong>Creators put Loveit button on every piece they create. </strong>
                  <strong>It can</strong> be a song, poem, photo, blog, basically <strong>anything</strong> on the web can have this button.
                </h2>
              </div>
              <div className="column is-one-third">
                <Icon fa="heart" size="large"/>
                <br/>
                <br/>
                <h2 className="subtitle">
                  Whenever <strong>you click it</strong>, we register your tip.
                  We track your support throughout the month and charge you total at the end of it.
                  <br/>
                </h2>
              </div>
              <div className="column is-one-third">
                <Icon fa="calendar" size="large"/>
                <br/>
                <br/>
                <h2 className="subtitle">
                  At the end of the month we combine all your tips and <strong>send your support to the creators.</strong>
                  You are in <strong>full control of how much you spend</strong> - set your own limits and we won't charge you more, than that.
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
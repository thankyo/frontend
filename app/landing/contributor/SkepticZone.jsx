import React, { Component } from "react";
import Icon from "../../components/Icon";

export default class SkepticZone extends Component {
  render() {
    return (
      <section className="section hero is-info has-text-centered">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Why us</h1>
            <div className="columns">
              <div className="column is-one-third">
                <Icon fa="shield" size="large"/>
                <br/>
                <br/>
                <h2 className="subtitle">
                  <strong>Bank level security.</strong><br/>
                  We do not store your Card information inside our system.
                </h2>
              </div>
              <div className="column is-one-third">
                <Icon fa="paypal" size="large"/>
                <br/>
                <br/>
                <h2 className="subtitle">
                  We are <strong>more effective than PayPal or Stripe</strong>.<br/>
                  Every donation lesser than 2$ turns into 18% commission,
                  combining into a monthly donations, allows us to lower this commission.
                  <br/>
                </h2>
              </div>
              <div className="column is-one-third">
                <Icon fa="gamepad" size="large"/>
                <br/>
                <br/>
                <h2 className="subtitle">
                  <strong>You are in full control of how much you spend</strong>.<br/>
                  Set a limit for a month and we won't charge you more, than that.
                </h2>
              </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="columns">
              <div className="column is-one-third">
                <Icon fa="file" size="large"/>
                <br/>
                <br/>
                <h2 className="subtitle">
                  <strong>No long term obligations.</strong><br/>
                  Long term support is a great thing, but it's not for everyone, so we don't force you
                  to be in relationship, that you are not sure you need.
                </h2>
              </div>
              <div className="column is-one-third">
                <Icon fa="plane" size="large"/>
                <br/>
                <br/>
                <h2 className="subtitle">
                  <strong>Creativity freedom.</strong><br/>
                  Creators are free to do what they want, we pose no restrictions on them.<br/>
                </h2>
              </div>
              <div className="column is-one-third">
                <Icon fa="usd" size="large"/>
                <br/>
                <br/>
                <h2 className="subtitle">
                  We keep our fees low.<br/>
                  <strong>90% of the tip goes directly to the creator</strong>, we'll be lowering this down in the future<br/>
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
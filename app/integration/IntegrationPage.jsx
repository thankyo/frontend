import React, { Component } from "react";
import Navigation from "../navigation/Navigation";
import ComponentWrap from "../components/ComponentWrap";
import IntegrationContent from "./IntegrationContent";
import PayoutAccount from "../payment/PayoutAccount";
import Footer from "../navigation/Footer";

function IntegrationHero() {
  return (
    <section className="hero is-primary">
        <div className="hero-body">
            <div className="container">
                <div className="columns is-vcentered">
                    <div className="column">
                        <p className="title">
                            Integration
                        </p>
                        <p className="subtitle">
                            Everything you need to <strong>integrate a website</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default class IntegrationPage extends Component {
  render() {
    return (
      <div>
          <Navigation/>
          <IntegrationHero/>
          <ComponentWrap>
              <IntegrationContent id={this.props.params.id}/>
              <PayoutAccount id={this.props.params.id}/>
              <br/>
              <br/>
              <br/>
          </ComponentWrap>
          <Footer/>
      </div>
    );
  }
}

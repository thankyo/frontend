import React, { Component } from "react";
import Navigation from "../navigation/Navigation";
import ComponentWrap from "../components/ComponentWrap";
import Footer from "../navigation/Footer";
import PaymentLimit from './PaymentLimit';
import PaymentMethod from './PaymentMethod';

class PaymentHero extends Component {
  render() {
    return (
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column">
                <p className="title">
                  Payment
                </p>
                <p className="subtitle">
                  All you need to support creators
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


export default class PaymentPage extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <PaymentHero/>
        <ComponentWrap>
          <h3 className="title is-3">1. Specify your limit</h3>
          <h3 className="subtitle is-5">We'll never charge you more than that</h3>
          <div className="hero is-narrow">
            <div className="hero-body">
              <div className="container">
                <div className="columns is-centered has-text-centered">
                  <PaymentLimit/>
                </div>
              </div>
            </div>
          </div>
          <hr/>
          <h3 className="title is-3">2. Connect your card</h3>
          <PaymentMethod/>
        </ComponentWrap>
        <Footer/>
      </div>
    );
  }
}


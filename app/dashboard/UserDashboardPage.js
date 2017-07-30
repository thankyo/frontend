import React, { Component } from "react";
import Navigation from "../navigation/Navigation";
import ComponentWrap from "../components/ComponentWrap";
import Invite from "./Invite";
import Profile from "../components/Profile";
import ThankTransactions from "../thank/Transaction";
import PaymentLimit from "../payment/PaymentLimit";
import PaymentMethod from "../payment/PaymentMethod";


export default class UserDashboardPage extends Component {
  render() {
    let { params: { id } } = this.props;
    return (
      <div>
        <Navigation/>
        <ComponentWrap>
          <div className="columns">
            <div className="column is-one-quarter">
              <Profile id={id}/>
            </div>
            <div className="column is-two-quarter">
              <Invite id={id}/>
              <ThankTransactions id={id}/>
            </div>
            <div className="column is-one-quarter">
              <article className="message is-info">
                <div className="message-body">
                  <PaymentLimit/>
                </div>
              </article>
              <PaymentMethod/>
            </div>
          </div>
        </ComponentWrap>
      </div>
    );
  }
}

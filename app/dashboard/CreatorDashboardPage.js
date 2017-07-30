import React, { Component } from "react";
import Navigation from "../navigation/Navigation";
import ComponentWrap from "../components/ComponentWrap";
import Invite from "./Invite";
import Profile from "../components/Profile";
import PaymentLimit from "../payment/PaymentLimit";


export default class CreatorDashboardPage extends Component {
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
            </div>
            <div className="column is-one-quarter">
              <article className="message is-info">
                <div className="message-body">
                  <PaymentLimit/>
                </div>
              </article>
            </div>
          </div>
        </ComponentWrap>
      </div>
    );
  }
}

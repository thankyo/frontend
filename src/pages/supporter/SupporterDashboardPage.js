import React from "react";
import Navigation from "../../navigation/Navigation";
import ComponentWrap from "../components/ComponentWrap";
import Supported from "./Supported";
import Invite from "./Invite";
import Profile from "../components/Profile";
import ThankTransactions from "../components/thank/Transaction";
import PaymentLimit from "../components/payment/PaymentLimit";
import PaymentMethod from "../components/payment/PaymentMethod";

export default function supporterDashboardPage({ match: { params: { id } } }) {
  return (
    <div>
      <Navigation/>
      <ComponentWrap>
        <div className="columns">
          <div className="column is-one-quarter">
            <Profile id={id}/>
            <Supported id={id}/>
          </div>
          <div className="column is-two-quarter">
            <Invite id={id}/>
            <ThankTransactions id={id}/>
          </div>
          <div className="column is-one-quarter">
            <PaymentLimit/>
            <PaymentMethod/>
          </div>
        </div>
      </ComponentWrap>
    </div>
  );
}

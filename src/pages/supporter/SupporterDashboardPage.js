import React from "react";

import Profile from "../../common/Profile";

import Supported from "./Supported";
import Invite from "./Invite";
import ThankTransactions from "./PendingTransaction";
import PaymentLimit from "./PaymentLimit";
import PaymentMethod from "./PaymentMethod";

export default function supporterDashboardPage({ match: { params: { id } } }) {
  return (
    <section className="section container">
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
    </section>
  );
}

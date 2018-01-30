import React from "react";

import Profile from "../../common/Profile";

import Supported from "./Supported";
import Invite from "./Invite";
import ThankTransactions from "./PendingTransaction";

export default function dashboardPage({ id }) {
  return (
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
      </div>
    </div>
  );
}

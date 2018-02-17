import React from "react";

import { Redirect, Route, Switch } from 'react-router-dom';
import SettingsMenu from "./SettingsNav";
import PaymentLimit from "./payment/PaymentLimitSection";
import ChargeAccount from "./payment/ChargeAccountSection";
import PayoutAccount from "./payment/PayoutAccountSection";
import OutgoingTransaction from "./transaction/OutgoingSection";
import IncomingTransaction from "./transaction/IncomingSection";
import ChargesSection from "./transaction/ChargesSection";
import PayoutSection from "./transaction/PayoutsSection";


import Profile from "./profile/ProfileSection";


export default function SettingsRouter() {
  return (
    <section className="section container">
      <div className="columns">
        <div className="column is-3">
          <SettingsMenu/>
        </div>
        <div className="column is-9">
          <Switch>
            <Route exact path="/settings">
              <Redirect to="/settings/profile"/>
            </Route>
            <Route path="/settings/limit">
              <PaymentLimit fill="#000000"/>
            </Route>
            <Route path="/settings/charge">
              <ChargeAccount/>
            </Route>
            <Route path="/settings/payout">
              <PayoutAccount/>
            </Route>
            <Route path="/settings/profile">
              <Profile/>
            </Route>
            <Route path="/settings/transaction/outgoing">
              <OutgoingTransaction/>
            </Route>
            <Route path="/settings/transaction/incoming">
              <IncomingTransaction/>
            </Route>
            <Route path="/settings/transaction/charge">
              <ChargesSection/>
            </Route>
            <Route path="/settings/transaction/payout">
              <PayoutSection/>
            </Route>
          </Switch>
        </div>
      </div>
    </section>
  );
}

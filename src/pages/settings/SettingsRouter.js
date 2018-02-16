import React from "react";

import { Redirect, Route, Switch } from 'react-router-dom';
import SettingsMenu from "./SettingsNav";
import PaymentLimit from "./payment/PaymentLimitSection";
import ChargeAccount from "./payment/ChargeAccountSection";
import PayoutAccount from "./payment/PayoutAccountSection";
import PendingTransaction from "./transaction/PendingSection";
import CompleteTransaction from "./transaction/CompleteSection";


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
            <Route path="/settings/transaction/pending">
              <PendingTransaction/>
            </Route>
            <Route path="/settings/transaction/complete">
              <CompleteTransaction/>
            </Route>
          </Switch>
        </div>
      </div>
    </section>
  );
}

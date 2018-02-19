import React from "react";

import { Redirect, Route, Switch } from 'react-router-dom';
import SettingsMenu from "./SettingsNav";
import PaymentLimit from "./payment/PaymentLimitSection";
import ChargeAccount from "./payment/ChargePage";
import PayoutAccount from "./payment/PayoutPage";
import OutgoingTransaction from "./payment/OutgoingSection";
import IncomingTransaction from "./payment/IncomingSection";
import ChargesSection from "./payment/ChargesSection";
import PayoutSection from "./payment/PayoutsSection";


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
            <Route path="/settings/charge">
              <ChargeAccount/>
            </Route>
            <Route path="/settings/payout">
              <PayoutAccount/>
            </Route>
            <Route path="/settings/profile">
              <Profile/>
            </Route>
          </Switch>
        </div>
      </div>
    </section>
  );
}

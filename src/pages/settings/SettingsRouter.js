import React from "react";

import { Redirect, Route, Switch } from 'react-router-dom';
import SettingsMenu from "./SettingsMenu";
import PaymentLimit from "./payment/PaymentLimitSection";
import ChargeAccount from "./payment/ChargeAccountSection";
import PayoutAccount from "./payment/PayoutAccountSection";

import Profile from "./profile/ProfileSection";


export default function SettingsRouter() {
  return (
    <section className="section container">
      <div className="columns">
        <div className="column is-one-quarter">
          <SettingsMenu/>
        </div>
        <div className="is-two-thirds column">
          <Switch>
            <Route exact path="/settings">
              <Redirect to="/settings/limit"/>
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
          </Switch>
        </div>
      </div>
    </section>
  );
}

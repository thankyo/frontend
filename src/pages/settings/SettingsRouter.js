import React from "react";

import { Redirect, Route, Switch } from 'react-router-dom';
import SettingsMenu from "./SettingsMenu";
import PaymentLimit from "./payment/PaymentLimit";
import PaymentMethod from "./payment/PaymentMethod";
import PayoutAccount from "./payment/PayoutAccount";


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
            <Route path="/settings/payment">
              <PaymentMethod/>
            </Route>
            <Route path="/settings/payout">
              <PayoutAccount/>
            </Route>
          </Switch>
        </div>
      </div>
    </section>
  );
}

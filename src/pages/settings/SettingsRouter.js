import React from "react";

import { Redirect, Route, Switch } from 'react-router-dom';
import SettingsMenu from "./SettingsNav";

import ChargePage from "./payment/charge/ChargePage";
import PayoutPage from "./payment/payout/PayoutPage";
import InstallationPage from "../creator/installation/InstallationPage";
import ProfilePage from "./profile/ProfilePage";


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
              <ChargePage/>
            </Route>
            <Route path="/settings/payout">
              <PayoutPage/>
            </Route>
            <Route path="/settings/profile">
              <ProfilePage/>
            </Route>
          </Switch>
        </div>
      </div>
    </section>
  );
}

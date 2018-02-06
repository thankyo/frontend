import React from 'react';

import { Route, Switch } from 'react-router-dom';
import TermsOfUsePage from "./TermsOfUsePage";
import PrivacyPolicyPage from "./PrivacyPolicyPage";

export default function LegalRouter() {
  return (
    <section className="section container">
      <Switch>
        <Route path="/legal/terms" component={TermsOfUsePage}/>
        <Route path="/legal/privacy" component={PrivacyPolicyPage}/>
      </Switch>
    </section>
  );
}
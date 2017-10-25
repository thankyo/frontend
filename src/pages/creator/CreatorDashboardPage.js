import React from "react";
import Profile from "../../common/Profile";
import EarnedThisMonth from "./EarnedThisMonth";
import PayoutAccount from "./PayoutAccount";
import IntegrationContent from "./integration/IntegrationContent";

export default function creatorDashboardPage({ match: { params: { id } } }) {
  return (
    <section className="section container">
        <div className="columns">
          <div className="column is-one-quarter">
            <Profile id={id}/>
          </div>
          <div className="column is-two-quarter">
            <IntegrationContent id={id}/>
          </div>
          <div className="column is-one-quarter">
            <EarnedThisMonth/>
            <PayoutAccount id={id}/>
          </div>
        </div>
    </section>
  );
}

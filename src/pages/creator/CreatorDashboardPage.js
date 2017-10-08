import React from "react";
import Profile from "../../components/Profile";
import IntegrationContent from "../../components/integration/IntegrationContent";
import EarnedThisMonth from "../../components/payment/EarnedThisMonth";
import PayoutAccount from "../../components/payment/PayoutAccount";

export default function creatorDashboardPage({ match: { params: { id } } }) {
  return (
    <div>
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
    </div>
  );
}

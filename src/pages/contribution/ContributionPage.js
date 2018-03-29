import React from "react";

import SupportedProjects from "./SupportedProjects";
import ThankTransactions from "./PendingTransaction";

export default function ContributionPage({ id }) {
  return (
    <div className="columns">
      <div className="column is-one-quarter">
        <SupportedProjects id={id}/>
      </div>
      <div className="column is-two-quarter">
        <ThankTransactions id={id}/>
      </div>
      <div className="column is-one-quarter">
      </div>
    </div>
  );
}

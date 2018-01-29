import React from "react";
import Profile from "../../common/Profile";
import EarnedThisMonth from "./EarnedThisMonth";
import Tags from "./Tags";
import IntegrationContent from "./integration/IntegrationContent";
import Projects from "./Projects";

export default function creatorDashboardPage({ id }) {
  return (
    <div className="columns">
      <div className="column is-one-quarter">
        <Profile id="my"/>
        <Tags id={id}/>
      </div>
      <div className="column is-two-quarter">
        <IntegrationContent id={id}/>
      </div>
      <div className="column is-one-quarter">
        <EarnedThisMonth/>
        <Projects id={id}/>
      </div>
    </div>
  );
}

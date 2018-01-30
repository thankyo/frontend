import React from "react";
import Profile from "../../common/Profile";
import EarnedThisMonth from "./EarnedThisMonth";
import IntegrationContent from "./integration/IntegrationContent";
import MyProjectNavigation from "./MyProjectNavigation";
import Posts from "../search/Posts";
import EditTags from "./EditTags";

export default function creatorDashboardPage({ id }) {
  return (
    <div className="columns">
      <div className="column is-one-quarter">
        <Profile id="my"/>
        <EditTags id="my"/>
      </div>
      <div className="column is-two-quarter">
        <MyProjectNavigation/>
        <Posts id="my"/>
        <IntegrationContent id="my"/>
      </div>
      <div className="column is-one-quarter">
        <EarnedThisMonth/>
      </div>
    </div>
  );
}

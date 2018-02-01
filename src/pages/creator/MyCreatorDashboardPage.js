import React from "react";
import Profile from "../../common/Profile";
import EarnedThisMonth from "./EarnedThisMonth";
import MyProjectNavigation from "./MyProjectNavigation";
import EditPosts from "../search/EditPosts";
import EditTags from "./EditTags";

export default function myCreatorDashboardPage() {
  return (
    <div className="columns">
      <div className="column is-one-quarter">
        <Profile id="my"/>
        <MyProjectNavigation/>
      </div>
      <div className="column is-two-quarter">
        <EditPosts id="my"/>
      </div>
      <div className="column is-one-quarter">
        <EarnedThisMonth/>
      </div>
    </div>
  );
}

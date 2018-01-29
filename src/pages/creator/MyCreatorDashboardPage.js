import React from "react";
import Profile from "../../common/Profile";
import EarnedThisMonth from "./EarnedThisMonth";
import Tags from "./Tags";
import Posts from "../search/Posts";

export default function creatorDashboardPage({ id }) {
  return (
    <div className="columns">
      <div className="column is-one-quarter">
        <Profile id="my"/>
        <Tags id={id}/>
      </div>
      <div className="column is-two-quarter">
        <Posts id={id}/>
      </div>
      <div className="column is-one-quarter">
        <EarnedThisMonth/>
      </div>
    </div>
  );
}

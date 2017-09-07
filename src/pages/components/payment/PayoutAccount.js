import React from "react";
import Icon from "../Icon";

export default function () {
  return (
    <div className="has-text-centered">
      <div className="title is-7 has-addons is-grouped" href="/api/v1/payment/payout/my/account">
        <a className="button button-green button-connect">
          <Icon fa={"cc-stripe"} text={"Connect your Bank"}/>
        </a>
      </div>
    </div>
  )
};
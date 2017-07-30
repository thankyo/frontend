import React from "react";
import Icon from "../components/Icon";

export default function () {
  return (
    <div className="content has-text-centered">
        <a className="button is-large is-success" href="/api/v1/payment/payout/my/account">
            <Icon fa="cc-stripe" text="Connect Payout"/>
        </a>
    </div>
  )
};
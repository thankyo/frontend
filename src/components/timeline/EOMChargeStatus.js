// Pending, Running, Success, Failed, UnderMin, NoBankDetails, FailedToCreate

import React, { Fragment } from "react";
import { IconWithText } from "components/Icon";

export default function EOMChargeStatus({ status }) {
  switch (status) {
    case "NoBankDetails":
      return (
        <Fragment>
          <span className="fa-stack fa-lg has-text-danger is-small">
            <i className="fa fa-circle fa-stack-2x"/>
            <i className="fa fa-credit-card fa-stack-1x fa-inverse"/>
          </span>
          No Card Provided
        </Fragment>
      );
    case "UnderMin":
      return (
        <IconWithText className="fa fa-exclamation-circle" text="Below minimum, contributions transferred to the next month"/>
      );
    default:
      return <span>{status}</span>
  }
}
// Pending, Running, Success, Failed, UnderMin, NoBankDetails, FailedToCreate

import React, { Fragment } from "react";

export default function EOMChargeStatus({ status }) {
  switch (status) {
    case "NoBankDetails":
      return (
        <Fragment>
        <span className="fa-stack fa-lg has-text-danger is-small">
          <i className="fa fa-circle fa-stack-2x"/>
          <i className="fa fa-credit-card fa-stack-1x fa-inverse"/>
        </span>
        </Fragment>
      );
    default:
      return <span>{status}</span>
  }
}
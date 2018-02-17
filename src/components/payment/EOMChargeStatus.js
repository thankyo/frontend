// Pending, Running, Success, Failed, UnderMin, NoBankDetails, FailedToCreate

import React from "react";

export default function EOMChargeStatus({ status }) {
  switch (status) {
    case "NoBankDetails":
      return (
        <span className="fa-stack fa-lg has-text-danger is-small">
          <i className="fa fa-circle fa-stack-2x"/>
          <i className="fa fa-credit-card fa-stack-1x fa-inverse"/>
        </span>
      );
    default:
      return <span>{status}</span>
  }
}
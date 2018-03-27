// Pending, Running, Success, Failed, UnderMin, NoBankDetails, FailedToCreate, NoContributions

import React from "react";
import { ErrorIcon } from "components/Icon";

export default function EOMChargeStatus({ status }) {
  switch (status) {
    case "NoContributions":
      return <span>No contributions</span>;
    case "NoBankDetails":
      return <ErrorIcon>No Card Provided</ErrorIcon>;
    case "UnderMin":
      return (
        <ErrorIcon>Below minimum of 5$. <span className="is-danger">Contributions transferred to the next month</span> </ErrorIcon>
      );
    default:
      return <span>{status}</span>
  }
}
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
        <ErrorIcon>Below minimum, contributions transferred to the next month</ErrorIcon>
      );
    default:
      return <span>{status}</span>
  }
}
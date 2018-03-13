// Pending, Running, Success, Failed, NoBankAccount, NoSuccessfulCharges
import React, { Fragment } from "react";
import { ErrorIcon, PayoutAccountMissing, SuccessIcon } from "components/Icon";

export default function EOMPayoutStatus({ status }) {
  switch (status) {
    case "NoBankAccount":
      return (
        <PayoutAccountMissing>
          <ErrorIcon>No Bank Account specified</ErrorIcon>
        </PayoutAccountMissing>
      );
    case "NoSuccessfulCharges":
      return <ErrorIcon>No Successful Charges</ErrorIcon>;
    case "Success":
      return <SuccessIcon>Success</SuccessIcon>;
    default:
      return <span>{status}</span>
  }

}
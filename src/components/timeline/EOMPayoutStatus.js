// Pending, Running, Success, Failed, NoBankAccount, NoSuccessfulCharges
import React, { Fragment } from "react";
import { ErrorIcon, SuccessIcon } from "components/Icon";

export default function EOMPayoutStatus({ status }) {
  switch (status) {
    case "NoBankAccount":
      return (
        <Fragment>
          <span className="fa-stack fa-lg has-text-danger">
            <i className="fa fa-circle fa-stack-2x"/>
            <i className="fa fa-bank fa-stack-1x fa-inverse"/>
          </span>
          <ErrorIcon>No Bank Account specified</ErrorIcon>
        </Fragment>
      );
    case "NoSuccessfulCharges":
      return <ErrorIcon>No Successful Charges</ErrorIcon>;
    case "Success":
      return <SuccessIcon>Success</SuccessIcon>;
    default:
      return <span>{status}</span>
  }

}
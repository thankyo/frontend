// Pending, Running, Success, Failed, NoBankAccount, NoSuccessfulCharges
import React, { Fragment } from "react";
import { Icon, IconWithText } from "components/Icon";

export default function EOMPayoutStatus({ status }) {
  switch (status) {
    case "NoBankAccount":
      return (
        <Fragment>
          <span className="fa-stack fa-lg has-text-danger">
            <i className="fa fa-circle fa-stack-2x"/>
            <i className="fa fa-bank fa-stack-1x fa-inverse"/>
          </span>
          No Bank Account specified
        </Fragment>
      );
    case "NoSuccessfulCharges":
      return <span>No Successful Charges</span>;
    case "Success":
      return <IconWithText className="fa fa-check-circle" text="Success"/>;
    default:
      return <span>{status}</span>
  }

}
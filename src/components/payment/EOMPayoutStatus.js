// Pending, Running, Success, Failed, NoBankAccount, NoSuccessfulCharges
import React from "react";

export default function EOMPayoutStatus({ status }){
  switch (status) {
    case "NoBankAccount":
      return (
        <span className="fa-stack fa-lg has-text-danger">
          <i className="fa fa-circle fa-stack-2x"/>
          <i className="fa fa-bank fa-stack-1x fa-inverse"/>
        </span>
      );
    case "NoSuccessfulCharges":
      return <span>No Successful Charges</span>;
    default:
      return <span>{status}</span>
  }

}
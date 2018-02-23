import React, { Fragment } from "react";
import PayoutAccountSection from "./PayoutAccountSection";
import PayoutsSection from "./EOMPayoutSection";
import IncomingSection from "./PendingPayoutsSection";

export default function PayoutPage() {
  return (
    <Fragment>
      <PayoutAccountSection/>
      <IncomingSection/>
      <PayoutsSection/>
    </Fragment>
  )
}
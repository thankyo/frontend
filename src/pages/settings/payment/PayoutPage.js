import React, { Fragment } from "react";
import PayoutAccountSection from "./PayoutAccountSection";
import PayoutsSection from "./PayoutsSection";
import IncomingSection from "./IncomingSection";

export default function PayoutPage() {
  return (
    <Fragment>
      <PayoutAccountSection/>
      <IncomingSection/>
      <PayoutsSection/>
    </Fragment>
  )
}
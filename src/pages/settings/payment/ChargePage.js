import React, { Fragment } from "react";
import ChargeAccountSection from "./ChargeAccountSection";
import ChargeSection from "./ChargesSection";
import PaymentLimitSection from "./PaymentLimitSection";
import OutgoingSection from "./OutgoingSection";

export default function ChargePage() {
  return (
    <Fragment>
      <ChargeAccountSection/>
      <PaymentLimitSection/>
      <OutgoingSection/>
      <ChargeSection/>
    </Fragment>
  )
}
import React from "react";
import PaymentLimit from "./PaymentLimit";

export default function LimitPage() {
  return (
    <div>
      <h1 className="title">Set your monthly limit</h1>
      <div>
        <PaymentLimit id="my"/>
      </div>
    </div>
  )
}
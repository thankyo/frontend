import React from "react";
import moment from "moment/moment";
import Money from "components/Money";
import EOMPayoutStatus from "./EOMPayoutStatus";

function EOMPayout({ yom, amount, status }) {
  return (
    <li className="timeline-item is-primary">
      <div className="timeline-marker is-medium is-primary"/>
      <div className="timeline-content">
        <p className="heading">
          {moment(yom).format("MMMM YY")}
        </p>
        <p>
          <Money {... amount}/>
        </p>
        <p>
          <EOMPayoutStatus status={status}/>
        </p>
      </div>
    </li>
  );
}

export default function EOMPayoutTimeline({ payouts }) {
  payouts.sort((a, b) => {
    return moment(b.yom).format("X") - moment(a.yom).format("X")
  });

  return (
    <ul className="timeline">
      <li className="timeline-item is-primary"/>
      {payouts.map((charge, i) => <EOMPayout key={charge.yom} {... charge}/>)}
    </ul>
  );
};
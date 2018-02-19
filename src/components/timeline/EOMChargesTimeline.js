import React from "react";
import moment from "moment/moment";
import EOMChargeStatus from "./EOMChargeStatus";
import Money from "components/Money";

function EOMCharge({ yom, amount, status }) {
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
          <EOMChargeStatus status={status}/>
        </p>
      </div>
    </li>
  );
}

export default ({ charges }) => {
  charges.sort((a, b) => {
    return moment(b.yom).format("X") - moment(a.yom).format("X")
  });

  return (
    <ul className="timeline">
      {charges.map((charge, i) => <EOMCharge key={i} {... charge}/>)}
    </ul>
  );
};
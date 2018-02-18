import React from "react";
import moment from "moment/moment";
import EOMChargeStatus from "../../pages/settings/transaction/EOMChargeStatus";

function EOMCharge({ yom, amount, status, handleExpand }) {
  return (
    <li className="timeline-item is-primary">
      <div className="timeline-marker is-medium is-primary"/>
      <div className="timeline-content">
        <p className="heading">
          <a onClick={handleExpand}>{moment(yom).format("MMMM YY")}</a>
        </p>
        <p>
          <EOMChargeStatus status={status}/> {amount.amount} {amount.currency}
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
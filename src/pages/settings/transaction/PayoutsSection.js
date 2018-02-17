import React from "react";
import moment from "moment";
import { connect } from "react-redux";

import { getPayouts } from "reducers/payment/payout/transaction.actions";
import Money from "components/Money";
import EOMPayoutStatus from "./EOMPayoutStatus";


function EOMPayout({ project, status, amount, yom }){
  return (
    <tr>
      <td><EOMPayoutStatus status={status}/></td>
      <td>{moment(yom).format("MMMM YY")}</td>
      <td><Money {... amount}/></td>
    </tr>
  );
}

function PayoutSection({ payouts }) {
  return (
    <div className="has-text-centered">
      <p className="title is-5">Payouts</p>
      <table className="table is-fullwidth">
        <thead>
        <tr>
          <td className="is-1">Status</td>
          <td className="is-2">Date</td>
          <td className="is-9">Amount</td>
        </tr>
        </thead>
        <tbody>
        {payouts.map((payout, i) =>  <EOMPayout key={i} {... payout}/>)}
        </tbody>
      </table>
    </div>
  );
}


const mapStateToProps = ({ payment: { payout: { transaction: { payout: { my: { payouts = [] } = {} } } } } }) => {
  return { payouts };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(getPayouts("my"));
  return {}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PayoutSection);
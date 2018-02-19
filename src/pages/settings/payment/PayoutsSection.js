import React from "react";
import { connect } from "react-redux";

import { getPayouts } from "reducers/payment/payout/transaction.actions";
import EOMPayoutTimeline from "components/timeline/EOMPayoutTimeline";

function PayoutSection({ payouts }) {
  return (
    <section className="section">
      <p className="title is-5 has-text-centered">Payouts</p>
      <EOMPayoutTimeline payouts={payouts}/>
    </section>
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
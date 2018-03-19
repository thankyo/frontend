import React, { Fragment } from "react";
import { connect } from "react-redux";

import { getPendingPayouts, getPendingPayoutsCsv } from "reducers/payment/payout/transaction.actions";
import PayoutTimeline from "components/timeline/PayoutTimeline";
import DownloadCSVButton from "components/DownloadCSVButton";

function OutgoingSection({ transactions, getPendingPayoutsCsv }) {
  return (
    <section className="section">
      <p className="title is-5 has-text-centered">
        <DownloadCSVButton onClick={getPendingPayoutsCsv}/>
        Pending
      </p>
      <PayoutTimeline transactions={transactions}/>
    </section>
  );
}


const mapStateToProps = ({ payment: { payout: { transaction: { byUser: { my: { transactions = [] } = {}} } } } }) => {
  return { transactions };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(getPendingPayouts("my"));
  return {
    getPendingPayoutsCsv: () => dispatch(getPendingPayoutsCsv("my"))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OutgoingSection);




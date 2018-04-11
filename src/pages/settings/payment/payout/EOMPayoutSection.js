import React from "react";
import { connect } from "react-redux";

import { getPayouts, getPayoutsCSV } from "reducers/payment/payout/transaction.actions";
import EOMPayoutTimeline from "components/timeline/EOMPayoutTimeline";
import DownloadCSVButton from "components/DownloadCSVButton";

function EOMPayoutSection({ payouts, getPayoutsCsv }) {
  return (
    <section className="section">
      <div className="title is-5 has-text-centered">
        <DownloadCSVButton onClick={getPayoutsCsv}/>
        Payouts
      </div>
      <EOMPayoutTimeline payouts={payouts}/>
    </section>
  );
}


const mapStateToProps = ({ payment: { payout: { transaction: { payout: { my: { payouts = [] } = {} } } } } }) => {
  return { payouts };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(getPayouts("my"));
  return {
    getPayoutsCsv: () => dispatch(getPayoutsCSV("my"))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EOMPayoutSection);
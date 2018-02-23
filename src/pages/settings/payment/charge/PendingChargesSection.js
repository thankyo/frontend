import React, { Fragment } from "react";
import { connect } from "react-redux";

import { getPendingCharges, getPendingChargesCsv } from "reducers/payment/charge/transaction.actions";
import ChargeTimeline from "components/timeline/ChargeTimeline";
import RefreshButton from "components/RefreshButton";

function OutgoingSection({ transactions, getPendingChargesCsv }) {
  return (
    <section className="section">
      <p className="title is-5 has-text-centered">Contributions</p>
      <div className="is-pulled-left">
        <RefreshButton submitting={false} className="is-info" onClick={getPendingChargesCsv}>Download CSV</RefreshButton>
      </div>
      <ChargeTimeline transactions={transactions}/>
    </section>
  );
}


const mapStateToProps = ({ payment: { charge: { transaction: { byUser: { my: { transactions = [] } = {} } } } } }) => {
  return { transactions };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(getPendingCharges("my"));
  return {
    getPendingChargesCsv: () => dispatch(getPendingChargesCsv("my"))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OutgoingSection);




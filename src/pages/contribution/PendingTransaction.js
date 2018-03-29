import React from "react";
import { connect } from "react-redux";
import { getPendingCharges } from "reducers/payment/charge/transaction.actions";
import ChargeTimeline from "components/timeline/ChargeTimeline";

const PendingTransactions = ({ transactions }) => {
  return (
    <div>
      <h1 className="subtitle">Contributions</h1>
      <ChargeTimeline transactions={transactions}/>
    </div>
  );
};

const mapStateToProps = ({ payment: { charge: { transaction: { byUser } } } }, { id }) => {
  let transactions = byUser[id] ? byUser[id].transactions : [];
  return { transactions };
};

const mapDispatchToProps = (dispatch, { id }) => {
  dispatch(getPendingCharges(id));
  return {}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PendingTransactions);
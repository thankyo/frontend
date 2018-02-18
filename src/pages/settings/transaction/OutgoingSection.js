import React, { Fragment } from "react";
import { connect } from "react-redux";

import { getOutgoingTransactions } from "reducers/payment/charge/transaction.actions";
import ChargeTimeline from "components/timeline/ChargeTimeline";

function OutgoingSection({ transactions }) {
  return (
    <Fragment>
      <p className="title is-5 has-text-centered">Outgoing Transactions</p>
      <ChargeTimeline transactions={transactions}/>
    </Fragment>
  );
}


const mapStateToProps = ({ payment: { charge: { transaction: { byUser: { my: { transactions = [] } = {} } } } } }) => {
  return { transactions };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(getOutgoingTransactions("my"));
  return {}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OutgoingSection);




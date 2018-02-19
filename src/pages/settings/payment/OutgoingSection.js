import React, { Fragment } from "react";
import { connect } from "react-redux";

import { getOutgoingTransactions } from "reducers/payment/charge/transaction.actions";
import ChargeTimeline from "components/timeline/ChargeTimeline";

function OutgoingSection({ transactions }) {
  return (
    <section className="section">
      <p className="title is-5 has-text-centered">Contributions</p>
      <ChargeTimeline transactions={transactions}/>
    </section>
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




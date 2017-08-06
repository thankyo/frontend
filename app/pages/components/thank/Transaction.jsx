import React, { Component } from "react";
import { connect } from "react-redux";
import { listTransactions } from "../../../reducers/thank/transaction.actions";
import Resource from "../Resource";
import Date from "../Date";

class ThankTransaction extends Component {
  render() {
    return (
      <tr>
        <td><Resource resource={this.props.transaction.resource}/></td>
        <td><Date time={this.props.transaction.created}/></td>
      </tr>
    );
  }
}

const ThankTransactions = ({ transactions }) => {
  return (
    <div className="content">
      <table className="table">
        <thead>
        <tr>
          <th>Resource</th>
          <th><abbr title="Date">Date</abbr></th>
        </tr>
        </thead>
        <tbody>
        {transactions.map(transaction => <ThankTransaction key={transaction.id} transaction={transaction}/>)}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ thank: { transaction } }, { id }) => {
  let userTransactions = transaction[id] ? transaction[id] : [];
  return {
    transactions: Object.values(userTransactions)
  };
};

const mapDispatchToProps = (dispatch, { id }) => {
  dispatch(listTransactions(id));
  return {}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThankTransactions);
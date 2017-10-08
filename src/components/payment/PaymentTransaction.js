import React from "react";
import { connect } from "react-redux";
import { listTransactions } from "../../../reducers/payment/transaction.actions";
import Date from "../Date";
import OperationIcon from "../OperationIcon";
import Money from "../Money";

function PaymentTransaction({ money, created, operation, thanks }) {
  return (
    <tr>
      <td/>
      <td><Money {...money}/></td>
      <td><OperationIcon operation={operation} amount={thanks}/>
      </td>
      <td><Date time={created}/></td>
    </tr>
  );
}

const PaymentTransactions = ({ transactions }) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th><abbr title="Source">Source</abbr></th>
        <th>Money</th>
        <th>Amount</th>
        <th><abbr title="Date">Date</abbr></th>
      </tr>
      </thead>
      <tbody>
      {transactions.map(transaction => <PaymentTransaction key={transaction.id} {...transaction}/>)}
      </tbody>
    </table>
  );
};

const mapStateToProps = ({ payment: { transaction } }, { id }) => {
  let userTransactions = transaction[id] ? transaction[id] : {};
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
)(PaymentTransactions);
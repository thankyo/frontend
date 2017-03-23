import React, {Component}   from "react";
import { connect }          from "react-redux";
import { fetch }            from "../reducers/paymentTransaction.actions";
import Date                 from "./Date";
import BankDetails          from "./payment/BankDetails";
import Money                from "./payment/Money";
import OperationIcon        from './icons/OperationIcon';

class PaymentTransaction extends Component {
    render() {
        return (
            <tr>
                <td><BankDetails {... this.props.transaction.source}/></td>
                <td><Money {... this.props.transaction.money}/></td>
                <td><OperationIcon operation={this.props.transaction.operation} amount={this.props.transaction.thanks}/></td>
                <td><Date time={this.props.transaction.created}/></td>
            </tr>
        );
    }
}

const PaymentTransactions = ({transactions}) => {
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
            {transactions.map(transaction => <PaymentTransaction key={transaction.id} transaction={transaction}/>)}
            </tbody>
        </table>
    );
};

const mapStateToProps = ({paymentTransaction}, {id}) => {
    let transactions = paymentTransaction[id] ? paymentTransaction[id] : [];
    return {
        transactions
    };
};

const mapDispatchToProps = (dispatch, {id}) => {
    dispatch(fetch(id));
    return {}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PaymentTransactions);
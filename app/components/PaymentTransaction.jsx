import React, {Component} from "react";
import { connect } from "react-redux";
import { fetch } from "../reducers/paymentTransaction.actions";
import OperationIcon from "./icons/OperationIcon";

class PaymentTransaction extends Component {
    render() {
        return (
            <tr>
                <td><OperationIcon operation={this.props.transaction.operation} amount={this.props.transaction.amount}/></td>
                <td>{this.props.transaction.source.type}</td>
                <td>{this.props.transaction.created}</td>
            </tr>
        );
    }
}

const PaymentTransactions = ({transactions}) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th><abbr title="Operation">Operation</abbr></th>
                <th>Resource</th>
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
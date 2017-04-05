import React, {Component} from "react";
import {connect} from "react-redux";
import {fetch} from "../reducers/thank/thankTransaction.actions";
import OperationIcon from "./icons/OperationIcon";
import Resource from "./Resource";
import Date from "./Date";

class ThankTransaction extends Component {
    render() {
        return (
            <tr>
                <td><OperationIcon operation={this.props.transaction.operation} amount={this.props.transaction.amount}/>
                </td>
                <td><Resource resource={this.props.transaction.resource}/></td>
                <td><Date time={this.props.transaction.created}/></td>
            </tr>
        );
    }
}

const ThankTransactions = ({transactions}) => {
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
            {transactions.map(transaction => <ThankTransaction key={transaction.id} transaction={transaction}/>)}
            </tbody>
        </table>
    );
};

const mapStateToProps = ({thank: { transaction }}, {id}) => {
    let userTransactions = transaction[id] ? transaction[id] : [];
    return {
        transactions: Object.values(userTransactions)
    };
};

const mapDispatchToProps = (dispatch, {id}) => {
    dispatch(fetch(id));
    return {}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ThankTransactions);
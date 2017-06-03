import React, {Component} from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";

class CreditIcon extends Component {
    singleCredit() {
        return (
            <Icon fa="heart-o"/>
        )
    }

    multipleCredit(amount) {
        return (
            <span className="content ">
                <Icon fa="heart-o"/>
                <span className="icon ">{amount}</span>
            </span>
        )
    }

    render() {
        if (this.props.amount == 1)
            return this.singleCredit();
        else
            return this.multipleCredit(this.props.amount);
    }
}

class DebitIcon extends Component {
    singleDebit() {
        return (
            <Icon fa="heartbeat"/>
        )
    }

    multipleDebit(amount) {
        return (
            <span className="content ">
                <Icon fa="heartbeat"/>
                <span className="icon ">{amount}</span>
            </span>
        )
    }

    render() {
        if (this.props.amount == 1)
            return this.singleDebit();
        else
            return this.multipleDebit(this.props.amount);
    }
}

export default class OperationIcon extends Component {
    creditIcon(amount) {
        if (amount == 1)
            return (
                <Icon fa="heart-o"/>
            )
    }

    debitIcon(amount) {
        return (
            <span className="icon">
                <Icon fa="plus"/> {amount}
            </span>
        )
    }

    render() {
        if (this.props.operation === "credit") {
            return (<CreditIcon amount={this.props.amount}/>);
        } else {
            return (<DebitIcon amount={this.props.amount}/>);
        }
    }
}

OperationIcon.propTypes = {
    operation: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
};
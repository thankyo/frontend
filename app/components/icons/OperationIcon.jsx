import React, {Component} from "react";
import PropTypes from "prop-types";

class CreditIcon extends Component {
    singleCredit() {
        return (
            <span className="icon ">
                <i className="fa fa-heart-o"></i>
            </span>
        )
    }

    multipleCredit(amount) {
        return (
            <span className="content ">
                <span className="icon ">
                    <i className="fa fa-heart-o"></i>
                </span>
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
            <span className="icon ">
                <i className="fa fa-heartbeat"></i>
            </span>
        )
    }

    multipleDebit(amount) {
        return (
            <span className="content ">
                <span className="icon ">
                    <i className="fa fa-heartbeat"></i>
                </span>
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
                <span className="icon">
                    <i className="fa fa-heart-o"></i>
                </span>
            )
    }

    debitIcon(amount) {
        return (
            <span className="icon">
                <i className="fa fa-plus"></i> {amount}
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
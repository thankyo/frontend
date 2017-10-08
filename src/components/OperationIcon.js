import React, {Component} from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

class CreditIcon extends Component {
    static singleCredit() {
        return (
            <Icon fa="heart-o"/>
        )
    }

    static multipleCredit(amount) {
        return (
            <span className="content ">
                <Icon fa="heart-o"/>
                <span className="icon ">{amount}</span>
            </span>
        )
    }

    render() {
        if (this.props.amount === 1)
            return CreditIcon.singleCredit();
        else
            return CreditIcon.multipleCredit(this.props.amount);
    }
}

class DebitIcon extends Component {
    static singleDebit() {
        return (
            <Icon fa="heartbeat"/>
        )
    }

    static multipleDebit(amount) {
        return (
            <span className="content ">
                <Icon fa="heartbeat"/>
                <span className="icon ">{amount}</span>
            </span>
        )
    }

    render() {
        if (this.props.amount === 1)
            return DebitIcon.singleDebit();
        else
            return DebitIcon.multipleDebit(this.props.amount);
    }
}

export default class OperationIcon extends Component {
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
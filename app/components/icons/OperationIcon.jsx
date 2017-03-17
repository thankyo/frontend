import React, { Component, PropTypes } from 'react';

export default class OperationIcon extends Component {
    creditIcon(amount) {
        return (
            <span className="content">
                <span className="icon">
                    <i className="fa fa-heartbeat"></i>
                </span>
                <span className="icon">
                    {amount}
                </span>
            </span>
        )
    }
    debitIcon(amount) {
        return (
            <span className="icon">
                <i className="fa fa-heart"></i> {amount}
            </span>
        )
    }
    render() {
        if (this.props.operation === "credit")
            return this.creditIcon(this.props.amount);
        else
            return this.debitIcon(this.props.amount);
    }
}

OperationIcon.propTypes = {
    operation: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
};
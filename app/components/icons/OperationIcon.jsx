import React, { Component, PropTypes } from 'react';

export default class OperationIcon extends Component {
    creditIcon(amount) {
        return (
            <span className="content icon is-small">
                <i className="fa fa-heartbeat"></i>
            </span>
        )
    }
    debitIcon(amount) {
        return (
            <span className="icon is-small">
                <i className="fa fa-heart"></i>
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
import React, { Component, PropTypes } from 'react';

export default class OperationIcon extends Component {
    creditIcon() {
        return (
                <span className="icon">
                    <i className="fa fa-heart-o"></i>
                </span>
        )
    }
    debitIcon() {
        return (
            <span className="icon">
                <i className="fa fa-plus"></i> {amount}
            </span>
        )
    }
    render() {
        if (this.props.operation === "credit") {
            return this.creditIcon(this.props.amount);
        } else {
            return this.debitIcon(this.props.amount);
        }
    }
}

OperationIcon.propTypes = {
    operation: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
};
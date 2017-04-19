import React, { Component } from 'react';
import PropTypes from "prop-types";

export default class Money extends Component {
    usd(amount) {
        return (
            <span className="content">
                <span className="icon">
                    <i className="fa fa-usd"></i>
                </span>
                <span className="icon">
                    {amount}
                </span>
            </span>
        )
    }
    currency(currency, amount) {
        return (
            <span className="content">
                <span className="icon">
                    {currency}
                </span>
                <span className="icon">
                    {amount}
                </span>
            </span>
        )
    }
    render() {
        if (this.props.currency === "USD")
            return this.usd(this.props.amount);
        else
            return this.currency(this.props.amount);
    }
}

Money.propTypes = {
    currency: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
};
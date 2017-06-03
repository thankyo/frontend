import React, { Component } from 'react';
import PropTypes from "prop-types";
import Icon from "components/Icon";

export default class BankDetails extends Component {
    payPal(email) {
        return (
            <span className="content">
                <Icon fa="paypal"/>
                <span className="is-hidden-mobile">
                    {email}
                </span>
            </span>
        )
    }
    empty() {
        return (
            <Icon fa="blind"/>
        )
    }
    render() {
        if (this.props.type === "payPal")
            return this.payPal(this.props.email);
        else
            return this.empty();
    }
}

BankDetails.propTypes = {
    type: PropTypes.string.isRequired,
    email: PropTypes.string
};
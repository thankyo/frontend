import React, { Component, PropTypes } from 'react';

export default class BankDetails extends Component {
    payPal(email) {
        return (
            <span className="content">
                <span className="icon">
                    <i className="fa fa-paypal"></i>
                </span>
                <span className="is-hidden-mobile">
                    {email}
                </span>
            </span>
        )
    }
    empty() {
        return (
            <span className="icon">
                <i className="fa fa-blind"></i>
            </span>
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
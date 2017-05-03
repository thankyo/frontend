import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

import {process} from "../../reducers/payment/stripe.actions";

import { connect } from 'react-redux';

const StripePayment = ({process}) => {
    let amount = 1000;
    let currency = "USD";
    return (
        <StripeCheckout
            currency={currency}
            amount={amount}
            token={(token) => process(amount , currency, token)}
            stripeKey="pk_test_wZ8YJXCwtdpqUHDBDM5p5QSj"
        />
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        process: (amount, currency, token) => {
            let charge = { amount: amount / 100.0, currency }
            dispatch(process(charge, token))
        }
    }
};

export default connect(undefined, mapDispatchToProps)(StripePayment)
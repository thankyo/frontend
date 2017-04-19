import React from "react";
import {connect} from "react-redux";
import {braintreeProcess} from "../../reducers/payment/braintree.actions";

import PaymentOptions from "./PaymentOptions"

const Braintree = ({braintree, braintreeProcess}) => {
    return (
        <div>
            <PaymentOptions selected={braintreeProcess}/>
            {braintree.isError ? <p className="help is-danger title">{braintree.error.message}</p> : <p></p>}
        </div>
    );
}

const mapStateToProps = ({payment: {braintree}}) => {
    return {braintree};
};

const mapDispatchToProps = (dispatch) => {
    return {
        braintreeProcess: (amount, currency, evt) => {
            evt.preventDefault();
            dispatch(braintreeProcess(amount, currency))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Braintree)
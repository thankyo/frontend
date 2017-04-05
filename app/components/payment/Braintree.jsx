import React from "react";
import {connect} from "react-redux";
import {braintreeProcess} from "../../reducers/payment/braintree.actions";
import Money from "./Money";
import OperationIcon from "../icons/OperationIcon";

const Braintree = ({braintree, braintreeProcess}) => {
    return (
        <form onSubmit={(evt) => braintreeProcess(10.00, "USD", evt)}>
            <Money amount={10} currency="USD"/><span className="icon">is</span>
            <OperationIcon operation="debit" amount={100}/>
            <hr/>
            <button type="submit"
                    className={braintree.isLoading ? "button is-inverted is-outlined is-loading" : "button is-inverted is-outlined"}>
                        <span className="icon">
                            <i className="fa fa-paypal"></i>
                        </span>
                <span>PayPal</span>
            </button>
            {braintree.isError ? <p className="help is-danger title">{braintree.error.message}</p> : <p></p>}
        </form>
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
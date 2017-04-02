import React, {Component} from "react";
import {connect} from "react-redux";
import {braintreeProcess} from "../../reducers/payment/braintree.actions";
import Money from './Money';
import OperationIcon from '../icons/OperationIcon';

const Braintree = ({braintree, braintreeProcess}) => {
    return (
        <div className="content">
            <form className="control is-half" onSubmit={(evt) => braintreeProcess(10.00, "USD", evt)}>
                <article className="notification is-primary">
                    <Money amount={10} currency="USD"/><span className="icon">is</span>
                    <OperationIcon operation="debit" amount={100}/>
                    <hr/>
                    <button type="submit" className={braintree.isLoading ? "button is-info is-loading" : "button is-info"}>
                        <span className="icon">
                            <i className="fa fa-paypal"></i>
                        </span>
                        <span>PayPal</span>
                    </button>
                </article>
            </form>
            {braintree.isError ? <p className="help is-danger title">{braintree.error.message}</p> : <p></p>}
        </div>
    );
}

const mapStateToProps = ({ payment: {braintree}}) => {
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
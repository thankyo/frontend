import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchToken, braintreeProcess} from "../../reducers/braintree.actions";
import Money from './Money';
import OperationIcon from '../icons/OperationIcon';

const Braintree = ({braintree, braintreeProcess}) => {
    return (
        <div className="content">
            <form className="control is-half" onSubmit={(evt) => braintreeProcess(evt, braintree.token)}>
                <article className="notification is-primary">
                    <Money amount="10" currency="USD"/><span className="icon">is</span>
                    <OperationIcon operation="debit" amount="100"/>
                    <hr/>
                    <button type="submit" className={braintree.isLoading ? "button is-info is-loading" : "button is-info"}>
                        <span className="icon">
                            <i className="fa fa-paypal"></i>
                        </span>
                        <span>PayPal</span>
                    </button>
                </article>
            </form>
            {braintree.isError ? <p className="help is-danger">{braintree.error.message}</p> : <p></p>}
        </div>
    );
}

const mapStateToProps = ({braintree}) => {
    return {braintree};
};

const mapDispatchToProps = (dispatch) => {
    dispatch(fetchToken());
    return {
        braintreeProcess: (evt, token) => {
            evt.preventDefault();
            dispatch(braintreeProcess(token))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Braintree)
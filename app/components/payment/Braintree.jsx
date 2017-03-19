import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchToken, braintreeProcess} from "../../reducers/braintree.actions";

const Braintree = ({ braintree, braintreeProcess}) => {
    return (
        <form className="control" onSubmit={(evt) => braintreeProcess(evt, braintree.token)}>
            <button type="submit"
                    className={braintree.isLoading ? "button is-info is-loading" : "button is-info"}>
                <span className="fa fa-paypal"></span>
            </button>
            {braintree.isError ? <p className="help is-danger">{braintree.error.message}</p> : <p></p>}
        </form>
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
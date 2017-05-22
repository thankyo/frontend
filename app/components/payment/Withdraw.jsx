import React, {Component} from "react";
import {connect} from "react-redux";
import { withdraw } from "reducers/payment/withdraw.actions";
import { Field, reduxForm } from "redux-form";

class WithdrawForm extends Component {
    render() {
        return (
            <form className="has-text-centered" onSubmit={this.props.handleSubmit}>
                <p className="control is-expanded">
                    <Field name="amount" className="input" component="input" type="number" placeholder="Amount"/>
                </p>
                <hr/>
                <button type="submit" className="button is-inverted is-outlined">
                    <span className="icon"><i className="fa fa-bank"></i></span> <span>Withdraw</span>
                </button>
            </form>
        )
    }
}

WithdrawForm = reduxForm({
    form: 'withdraw'
})(WithdrawForm);

class Withdraw extends Component {
    render() {
        return (
            <WithdrawForm onSubmit={this.props.doWithdraw}/>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        doWithdraw: (amount) => {
            dispatch(withdraw(amount))
        }
    }
};

export default connect(undefined, mapDispatchToProps)(Withdraw)
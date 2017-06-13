import React, {Component} from "react";
import Money from "./Money";
import OperationIcon from "components/icons/OperationIcon";

import { connect } from 'react-redux';

import {process as stripeProcess} from "reducers/payment/stripe.actions";
import Icon from "../components/Icon";


class PaymentOption extends Component {
    render() {
        let charge = {amount: this.props.amount, currency: this.props.currency}
        return (
            <div className="column">
                <div className="notification is-success">
                    <p className="title is-5">Large</p>
                    <Money amount={this.props.amount} currency={this.props.currency}/>
                    <hr/>
                    <OperationIcon operation="debit" amount={this.props.loveit}/>
                    <hr/>
                    <button className="button is-warning" onClick={(evt) => {
                        evt.preventDefault();
                        this.props.stripe(charge);
                    }}>
                        <Icon fa="credit-card"/><span>Card</span>
                    </button>
                </div>
            </div>
        )
    }
}

const PaymentOptions = ({stripe}) => {
    return (
        <div className="has-text-centered">
            <p className="title">Payment</p>
            <hr/>
            <div className="columns is-mobile">
                <PaymentOption stripe={stripe} amount={10} loveit={100}
                               currency="USD"/>
                <PaymentOption stripe={stripe} amount={15} loveit={150}
                               currency="USD"/>
                <PaymentOption stripe={stripe} amount={20} loveit={200}
                               currency="USD"/>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        stripe: (charge) => {
            dispatch(stripeProcess(charge))
        }
    }
};

export default connect(undefined, mapDispatchToProps)(PaymentOptions)
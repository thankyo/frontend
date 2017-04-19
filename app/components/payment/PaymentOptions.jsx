import React, {Component} from "react";
import Money from "./Money";
import OperationIcon from "../icons/OperationIcon";


class PaymentOption extends Component {
    render() {
        return (
            <div className="column">
                <p className="notification is-success">
                    <p className="title is-5">Large</p>
                    <Money amount={this.props.amount} currency={this.props.currency}/>
                    <hr/>
                    <OperationIcon operation="debit" amount={this.props.loveit}/>
                    <hr/>
                    <button className="button is-primary" onClick={(evt) => this.props.selected(this.props.amount, this.props.currency, evt)}>Select</button>
                </p>
            </div>
        )
    }
}

export default class PaymentOptions extends Component {
    render() {
        return (
            <div className="has-text-centered">
                <p className="title">Payment</p>
                <hr/>
                <div className="columns is-mobile">
                    <PaymentOption selected={this.props.selected} amount={10} loveit={100} currency="USD"/>
                    <PaymentOption selected={this.props.selected} amount={15} loveit={150} currency="USD"/>
                    <PaymentOption selected={this.props.selected} amount={20} loveit={200} currency="USD"/>
                </div>
            </div>
        );
    }
}
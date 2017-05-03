import React, {Component} from "react";

import Braintree from "./Braintree";
import StripePayment from './StripePayment';
import Withdraw from "./Withdraw";

export default class Payment extends Component {
    render() {
        return (
            <div>
                <div className="notification is-info">
                    <StripePayment/>
                    {/*<Braintree/>*/}
                </div>
                <div className="notification is-info">
                    <Withdraw/>
                </div>
            </div>
        )
    }
}


import React, {Component} from "react";

import Withdraw from "./Withdraw";
import PaymentOptions from "./PaymentOptions";

export default class Payment extends Component {
    render() {
        return (
            <div>
                <div className="notification is-info">
                    <PaymentOptions/>
                </div>
                <div className="notification is-info">
                    <Withdraw/>
                </div>
            </div>
        )
    }
}


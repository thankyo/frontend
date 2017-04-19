import React, {Component} from "react";

import Braintree from "./Braintree";
import Withdraw from "./Withdraw";

export default class Payment extends Component {
    render() {
        return (
            <div>
                <div className="notification is-info">
                    <Braintree/>
                </div>
                <div className="notification is-info">
                    <Withdraw/>
                </div>
            </div>
        )
    }
}


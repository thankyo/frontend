import React, { Component } from "react";
import {connect} from "react-redux";
import {login} from "reducers/auth.actions";
import Icon from "../components/Icon";

class PayoutAccount extends Component {
    render() {
        return (
            <div className="content has-text-centered">
                <a className="button is-large is-success" href="/api/v1/payment/payout/my/account">
                    <Icon fa="cc-stripe"/>
                    <span>Connect with Stripe</span>
                </a>
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginFacebook: () => dispatch(login("facebook"))
    }
};

export default connect(undefined, mapDispatchToProps)(PayoutAccount);
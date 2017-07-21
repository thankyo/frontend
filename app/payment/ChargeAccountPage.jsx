import React from "react";
import {connectChargeAccount, getChargeAccount} from "reducers/payment/chargeAccount.actions";
import {connect} from "react-redux";
import Icon from "../components/Icon";

function CreditCard(props) {
    return (
        <div className="box">
            <div className="title is-2">{props.brand} ... {props.last4} </div>
        </div>
    )
}


const ChargeAccountPage = ({ chargeAccount, updateChargeAccount }) => {
    return (
        <div className="hero is-narrow">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-vcentered has-text-centered">
                        <div className="column is-4 is-offset-4">
                            <h3 className="title is-3">Connect your card</h3>
                            <CreditCard {...chargeAccount}/>
                            <div className="title is-4 has-addons is-grouped">
                                <a onClick={updateChargeAccount} className="button is-large is-success is-large"><Icon fa="cc-stripe"/><span>Connect your Card</span></a>
                            </div>
                            <div className="title is-4">
                                <Icon fa="cc-visa"/> <Icon fa="cc-mastercard"/> <Icon fa="cc-amex"/> <Icon fa="cc-jcb"/> <Icon fa="cc-discover"/> <Icon fa="cc-diners-club"/>
                            </div>
                            <br/>
                            <h5 className="subtitle is-5"><b>All charges happen at the end of the month</b></h5>
                        </div>
                    </div>
                    <img className="pull-right" src="/images/stripe/powered_by_stripe.png"/>
                </div>
            </div>
        </div>
    );
};


const mapStateToProps = ({payment: { chargeAccount }}) => {
    return { chargeAccount };
};

const mapDispatchToProps = (dispatch) => {
    dispatch(getChargeAccount());
    return {
        updateChargeAccount: () => {
            dispatch(connectChargeAccount());
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChargeAccountPage);




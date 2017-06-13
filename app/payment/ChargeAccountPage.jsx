import React from "react";
import {connectChargeAccount} from "reducers/payment/stripe.actions";
import {connect} from "react-redux";
import Icon from "../components/Icon";

const ChargeAccountPage = ({ updateChargeAccount }) => {
    return (
        <div className="hero is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-vcentered has-text-centered">
                        <div className="column is-4 is-offset-4">
                            <h3 className="title is-3">Connect your card</h3>
                            <div className="title is-4 has-addons is-grouped">
                                <a onClick={updateChargeAccount} className="button is-large is-success is-large"><Icon fa="cc-stripe"/><span>Pay with Card</span></a>
                            </div>
                            <div className="title is-4">
                                <Icon fa="cc-visa"/> <Icon fa="cc-mastercard"/> <Icon fa="cc-amex"/> <Icon fa="cc-jcb"/> <Icon fa="cc-discover"/> <Icon fa="cc-diners-club"/>
                            </div>
                            <br/>
                            <h5 className="subtitle is-5"><b>All charges happen at the end of the month</b></h5>
                            <a className="button is-info is-inverted is-large pull-right" onClick={() => skip()}>Skip</a>
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




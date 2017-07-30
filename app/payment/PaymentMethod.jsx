import React from "react";
import { connectChargeAccount, getChargeAccount } from "../reducers/payment/chargeAccount.actions";
import { connect } from "react-redux";
import Icon from "../components/Icon";

function CreditCard(props) {
  return (
    <div className="box">
      <div className="title is-7">{props.brand} ... {props.last4} </div>
    </div>
  )
}


function PaymentMethod({ chargeAccount, updateChargeAccount }) {
  return (
    <div className="has-text-centered">
      <h3 className="title is-6">Connect your card</h3>
      <CreditCard {...chargeAccount}/>
      <div className="title is-7 has-addons is-grouped">
        <a onClick={updateChargeAccount} className="button is-large is-success is-large">
          <Icon fa="cc-stripe"/><span>Connect your Card</span>
        </a>
      </div>
      <div className="title is-7">
        <Icon fa="cc-visa"/><span> </span>
        <Icon fa="cc-mastercard"/><span> </span>
        <Icon fa="cc-amex"/><span> </span>
        <Icon fa="cc-jcb"/><span> </span>
        <Icon fa="cc-discover"/><span> </span>
        <Icon fa="cc-diners-club"/><span> </span>
      </div>
      <br/>
      <h5 className="subtitle is-7"><b>All charges happen at the end of the month</b></h5>
      <img className="pull-right" src="/images/stripe/powered_by_stripe.png"/>
    </div>
  );
};


const mapStateToProps = ({ payment: { chargeAccount } }) => {
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
)(PaymentMethod);




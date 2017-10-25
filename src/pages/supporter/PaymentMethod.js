import React from "react";
import { connectChargeAccount, getChargeAccount } from "../../reducers/payment/chargeAccount.actions";
import { connect } from "react-redux";
import Icon from "../../common/Icon";

const PAYMENT_OPTIONS = [ "visa", "mastercard", "discover", "amex", "paypal" ];

function CreditCard({ brand, last4}) {
  return (
    <article className="message message-card has-text-centered">
      <div className="message-body">
        <div className="title is-4">
          <Icon fa={`cc-${brand.toLowerCase()}`}/>
          <span> ... </span>
          <span>{last4}</span>
        </div>
      </div>
    </article>
  )
}

function PaymentMethod({ chargeAccount, updateChargeAccount }) {
  return (
    <div className="has-text-centered">
      <CreditCard {...chargeAccount}/>
      <div className="title is-7 has-addons is-grouped">
        <a onClick={updateChargeAccount} className="button button-green button-connect">
          Connect your Card
        </a>
      </div>
      <div className="payment-variants">
        {PAYMENT_OPTIONS.map((option, i) => (
            <span key={i} className="payment-item">
              <Icon fa={`cc-${option}`}/>
            </span>
          )
        )}
      </div>
      <br/>
      <h5 className="subtitle payment-text"><b>All charges happen at the end of the month</b></h5>
      <img className="is-pulled-right" src="/img/stripe/powered_by_stripe.png"/>
    </div>
  );
}


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




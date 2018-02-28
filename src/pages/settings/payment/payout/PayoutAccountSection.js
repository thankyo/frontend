import React from "react";
import { connect } from "react-redux";
import { Icon } from "components/Icon";
import { deletePayoutAccount, getPayoutAccount } from "reducers/payment/payout/account.actions";
import { componentFactory } from "components/loadingComponent";
import spinnerFactory from "components/spinnerFactory";
import RefreshLink from "components/RefreshLink";

function BankDetails({ account }) {
  if (!account) {
    return (
      <div className="subtitle">
         <span className="fa-stack fa-lg has-text-danger">
          <i className="fa fa-circle fa-stack-2x"/>
          <i className="fa fa-bank fa-stack-1x fa-inverse"/>
        </span>
        <span>Here could be your bank</span>
      </div>
    )
  }
  return (
    <div className="subtitle">
      <span className="fa-stack fa-lg has-text-primary">
        <i className="fa fa-circle fa-stack-2x"/>
        <i className="fa fa-cc-stripe fa-stack-1x fa-inverse"/>
      </span>
      <span>Connected</span>
    </div>
  )

}

function ConnectPayoutAccount() {
  return (
    <a className="button is-outlined is-primary" href="/api/v1/payment/my/payout/account/connect">
      <Icon className="fa fa-cc-stripe">Connect your Bank</Icon>
    </a>
  )
}

function PayoutAccountSection({ account, deletePayoutAccount, isMissing }) {
  return (
    <section className="section">
      <div className="has-text-centered">
        <p className="title is-5">Account</p>
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <BankDetails account={account}/>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              {isMissing && <ConnectPayoutAccount/>}
              {!isMissing && <RefreshLink onClick={deletePayoutAccount} className="is-danger">Delete</RefreshLink>}
            </div>
          </div>
        </div>
        <br/>
        <h5 className="subtitle payment-text"><b>All payouts happen at the end of the month</b></h5>
        <img className="is-pulled-right" src="/img/stripe/powered_by_stripe.png"/>
      </div>
    </section>
  )
};


const mapStateToProps = ({ payment: { payout: { account } } }) => {
  return account;
};

const mapDispatchToProps = (dispatch) => {
  dispatch(getPayoutAccount());
  return {
    getPayoutAccount: () => dispatch(getPayoutAccount()),
    deletePayoutAccount: () => dispatch(deletePayoutAccount()),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(componentFactory(PayoutAccountSection, spinnerFactory(284)));


import React from "react";
import { connect } from "react-redux";
import { DeleteIcon, PayoutAccountAssociated, PayoutAccountMissing, StripeIcon } from "components/Icon";
import { deletePayoutAccount, getPayoutAccount } from "reducers/payment/payout/account.actions";
import { componentFactory } from "components/loadingComponent";
import spinnerFactory from "components/spinnerFactory";
import RefreshLink from "components/RefreshLink";

function ConnectPayoutAccount() {
  return (
    <a className="button is-outlined is-primary" href="/api/v1/payment/my/payout/account/connect">
      <StripeIcon>Connect your Bank</StripeIcon>
    </a>
  )
}

function PayoutAccountSection({ account, deletePayoutAccount, isMissing }) {
  return (
    <section className="section">
      <div className="has-text-centered">
        <p className="title is-5">Account</p>
        <div className="columns">
          <div className="column is-one-third">
            {account ? <PayoutAccountAssociated/> : <PayoutAccountMissing/>}
          </div>
          <div className="column is-one-third">
            <div className="subtitle">
              {account ? "Connected" : "Here could be your bank"}
            </div>
          </div>
          <div className="column is-one-third">
            <div className="is-pulled-right">
              {isMissing && <ConnectPayoutAccount/>}
              {!isMissing && <RefreshLink onClick={deletePayoutAccount} className="button is-danger is-outlined"><DeleteIcon>Delete</DeleteIcon></RefreshLink>}
            </div>
          </div>
        </div>
        <br/>
        <p className="subtitle is-size-7"><b>All payouts happen at the end of the month</b></p>
      </div>
    </section>
  )
};


const mapStateToProps = ({ payment: { payout: { account } } }) => account;

const mapDispatchToProps = (dispatch) => {
  dispatch(getPayoutAccount());
  return {
    getPayoutAccount: () => dispatch(getPayoutAccount()),
    deletePayoutAccount: () => dispatch(deletePayoutAccount),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(componentFactory(PayoutAccountSection, spinnerFactory(284)));


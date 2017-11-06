import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "../../../common/Loading";
import { IconWithText } from "../../../common/Icon";
import { getPayoutAccount, deletePayoutAccount } from "../../../reducers/payment/payoutAccount.actions";

function ConnectPayoutAccount() {
  return (
    <a className="button is-outlined is-primary" href="/api/v1/payment/my/payout/account/connect">
      <IconWithText className="fa fa-cc-stripe" text="Connect your Bank"/>
    </a>
  )
}

class DeleteAccountButton extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: false };
  }

  handleDeleteAccount = () => {
    this.setState({ loading: true });
    this.props.
      deletePayoutAccount().
      catch(() => this.setState({ loading: false }));
  };

  render() {
    let { loading } = this.state;
    return (
      <a onClick={this.handleDeleteAccount} className={`button is-outlined is-primary ${loading && "is-loading"}`}>
        Delete
      </a>
    )
  }
}

class PayoutAccount extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: false };
  }
  componentWillMount() {
    let { payoutAccount } = this.props;
    if (!payoutAccount) {
      this.setState({ loading: true });
      this.props.getPayoutAccount().then(() => this.setState({ loading: false }));
    }
  }
  render() {
    let { loading } = this.state;
    if ( loading ) {
      return (
        <div className="has-text-centered">
          <p className="title is-5">Payout Account</p>
          <Loading/>
        </div>
      )
    }

    let { payoutAccount } = this.props;

    return (
      <div className="has-text-centered">
        <p className="title is-5">Payout Account</p>
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <div className="subtitle">
                {!payoutAccount && "No bank connected"}
                {payoutAccount && "Bank Account Connected"}
              </div>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              {payoutAccount && <DeleteAccountButton deletePayoutAccount={this.props.deletePayoutAccount}/>}
              {!payoutAccount && <ConnectPayoutAccount/>}
            </div>
          </div>
        </div>
        <br/>
        <h5 className="subtitle payment-text"><b>All payouts happen at the end of the month</b></h5>
        <img className="is-pulled-right" src="/img/stripe/powered_by_stripe.png"/>
      </div>
    )
  }
};


const mapStateToProps = ({ payment: { payoutAccount } }) => {
  return { payoutAccount };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPayoutAccount: () => dispatch(getPayoutAccount()),
    deletePayoutAccount: () => dispatch(deletePayoutAccount()),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PayoutAccount);


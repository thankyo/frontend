import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "components/Loading";
import { IconWithText } from "components/Icon";
import { deletePayoutAccount, getPayoutAccount } from "../../../reducers/payment/payoutAccount.actions";

function BankDetails({ payoutAccount }) {
  if (!payoutAccount) {
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
    this.props.deletePayoutAccount().catch(() => this.setState({ loading: false }));
  };

  render() {
    let { loading } = this.state;
    return (
      <a onClick={this.handleDeleteAccount} className={`button is-outlined is-danger ${loading && "is-loading"}`}>
        Delete
      </a>
    )
  }
}

class PayoutAccountSection extends Component {
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
    if (loading) {
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
              <BankDetails payoutAccount={payoutAccount}/>
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
)(PayoutAccountSection);


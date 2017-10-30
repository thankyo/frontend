import React, { Component } from "react";
import { connectChargeAccount, getChargeAccount } from "../../../reducers/payment/chargeAccount.actions";
import { connect } from "react-redux";
import Icon from "../../../common/Icon";

const PAYMENT_OPTIONS = ["visa", "mastercard", "discover", "amex", "paypal"];

function NoCardConnected() {

}

function CreditCard({ brand, last4 }) {
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

class ConnectCardButton extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: false };
  }

  handleConnectCard = () => {
    this.setState({ loading: true });
    this.props.connectChargeAccount().
      then(() => {
        console.log("Success");
        this.setState({ loading: false })
      }).
      catch(() => {
        console.log("Failure");
        this.setState({ loading: false })
      });
  };

  render() {
    let { loading } = this.state;
    return (
      <a onClick={this.handleConnectCard} className={`button is-outlined is-primary ${loading && "is-loading"}`}>
        Pay with Card
      </a>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    connectChargeAccount: () => dispatch(connectChargeAccount())
  }
};

ConnectCardButton = connect(
  undefined,
  mapDispatchToProps
)(ConnectCardButton);

class PaymentMethod extends Component {
  render() {
    let { chargeAccount } = this.props;
    return (
      <div className="has-text-centered">
        <p className="title is-5">Charge Account</p>
        <div className="columns">
          <div className="column is-12">
            <CreditCard {...chargeAccount}/>
            <ConnectCardButton/>
          </div>
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
}


const mapStateToProps = ({ payment: { chargeAccount } }) => {
  return { chargeAccount };
};

export default connect(
  mapStateToProps,
  undefined
)(PaymentMethod);




import React, { Component } from "react";
import { connectChargeAccount, getChargeAccount } from "../../../reducers/payment/chargeAccount.actions";
import { connect } from "react-redux";
import Icon from "../../../common/Icon";
import Loading from "../../../common/Loading";
import Card from "./Card";

const PAYMENT_OPTIONS = ["visa", "mastercard", "discover", "amex", "paypal"];

function AllPaymentOptions() {
  return (
    <div className="payment-variants">
      {PAYMENT_OPTIONS.map((option, i) => (
          <span key={i} className="payment-item">
              <Icon fa={`cc-${option}`}/>
            </span>
        )
      )}
    </div>
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

class ChargeAccount extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };
  }
  componentWillMount() {
    let { chargeAccount } = this.props;
    if (chargeAccount.last4 && chargeAccount.last4 !== "0000") {
      this.setState({ loading: false })
    } else {
      this.props.getChargeAccount().then(() => this.setState({ loading: false }));
    }
  }
  render() {
    let { loading } = this.state;
    let { chargeAccount, connectChargeAccount } = this.props;

    if ( loading ) {
      return (
        <div className="has-text-centered">
          <p className="title is-5">Charge Account</p>
          <Loading/>
        </div>
      )
    }
    return (
      <div className="has-text-centered">
        <p className="title is-5">Charge Account</p>
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <Card {... chargeAccount}/>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              {chargeAccount.isMissing && <ConnectCardButton connectChargeAccount={connectChargeAccount}/>}
            </div>
          </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    connectChargeAccount: () => dispatch(connectChargeAccount()),
    getChargeAccount: () => dispatch(getChargeAccount())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChargeAccount);




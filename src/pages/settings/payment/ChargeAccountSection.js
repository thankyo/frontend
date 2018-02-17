import React, { Component } from "react";
import { connectChargeAccount, getChargeAccount, deleteCard } from "reducers/payment/charge/account.actions";
import { connect } from "react-redux";
import Loading from "components/Loading";
import { IconWithText } from "components/Icon";
import EOMChargeStatus from "../transaction/EOMChargeStatus";

function Card({ isMissing, brand, last4 }) {
  if (isMissing) {
    return (
      <div className="subtitle">
        <EOMChargeStatus status="NoBankDetails"/>
        <span>Here can be your card</span>
      </div>
    )
  }
  return (
    <div className="subtitle">
        <span className="fa-stack fa-lg has-text-primary">
          <i className="fa fa-circle fa-stack-2x is-primary"/>
          <i className={`fa fa-cc-${brand.toLowerCase()} fa-stack-1x fa-inverse`}/>
        </span>
      <span>Card ending in {last4}</span>
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
    this.props.
      connectChargeAccount().
      catch(() => this.setState({ loading: false }));
  };

  render() {
    let { loading } = this.state;
    return (
      <a onClick={this.handleConnectCard} className={`button is-outlined is-primary ${loading && "is-loading"}`}>
        <IconWithText className="fa fa-credit-card" text="Connect Card"/>
      </a>
    )
  }
}

class DeleteCardButton extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: false };
  }

  handleDeleteCard = () => {
    this.setState({ loading: true });
    this.props.
      deleteCard().
      catch(() => this.setState({ loading: false }));
  };

  render() {
    let { loading } = this.state;
    return (
      <a onClick={this.handleDeleteCard} className={`button is-outlined is-danger ${loading && "is-loading"}`}>
        Delete
      </a>
    )
  }
}

class ChargeAccountSection extends Component {
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
    if ( loading ) {
      return (
        <div className="has-text-centered">
          <p className="title is-5">Charge Account</p>
          <Loading/>
        </div>
      )
    }

    let { chargeAccount, connectChargeAccount, deleteCard } = this.props;
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
              {!chargeAccount.isMissing && <DeleteCardButton deleteCard={deleteCard}/>}
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


const mapStateToProps = ({ payment: { charge: { account: chargeAccount } } }) => {
  return { chargeAccount };
};

const mapDispatchToProps = (dispatch) => {
  return {
    connectChargeAccount: () => dispatch(connectChargeAccount()),
    getChargeAccount: () => dispatch(getChargeAccount()),
    deleteCard: () => dispatch(deleteCard()),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChargeAccountSection);




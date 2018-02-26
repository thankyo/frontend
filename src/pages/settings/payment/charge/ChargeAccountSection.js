import React, { Component } from "react";
import { connectChargeAccount, deleteCard, getChargeAccount } from "reducers/payment/charge/card.actions";
import { connect } from "react-redux";
import { IconWithText } from "components/Icon";
import { componentFactory } from "components/loadingComponent";
import spinnerFactory from "components/spinnerFactory";
import RefreshLink from "components/RefreshLink";

function Card({ isMissing, brand, last4 }) {
  if (isMissing) {
    return (
      <div className="subtitle">
        <span className="fa-stack fa-lg has-text-danger is-small">
          <i className="fa fa-circle fa-stack-2x"/>
          <i className="fa fa-credit-card fa-stack-1x fa-inverse"/>
        </span>
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
    this.props.connectChargeAccount().catch(() => this.setState({ loading: false }));
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

function ChargeAccountSection({ isMissing, brand, last4, connectChargeAccount, deleteCard }) {
  return (
    <section className="section">
      <div className="has-text-centered">
        <p className="title is-5">Card</p>
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <Card isMissing={isMissing} brand={brand} last4={last4}/>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              {isMissing && <RefreshLink onClick={connectChargeAccount}><IconWithText className="fa fa-credit-card" text="Connect Card"/></RefreshLink>}
              {!isMissing && <RefreshLink onClick={deleteCard} className="is-danger">Delete</RefreshLink>}
            </div>
          </div>
        </div>
        <br/>
        <h5 className="subtitle payment-text"><b>All charges happen at the end of the month</b></h5>
        <img className="is-pulled-right" src="/img/stripe/powered_by_stripe.png"/>
      </div>
    </section>
  );
}


const mapStateToProps = ({ payment: { charge: { card } } }) => {
  return card;
};

const mapDispatchToProps = (dispatch) => {
  dispatch(getChargeAccount());
  return {
    connectChargeAccount: () => dispatch(connectChargeAccount()),
    deleteCard: () => dispatch(deleteCard),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(componentFactory(ChargeAccountSection, spinnerFactory(284)));




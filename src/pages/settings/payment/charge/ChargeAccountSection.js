import React from "react";
import { connectChargeAccount, deleteCard, getChargeAccount } from "reducers/payment/charge/card.actions";
import { connect } from "react-redux";
import { CreditCardAssociated, CreditCardIcon, CreditCardMissing, DeleteIcon } from "components/Icon";
import { componentFactory } from "components/loadingComponent";
import spinnerFactory from "components/spinnerFactory";
import RefreshLink from "components/RefreshLink";

function ChargeAccountSection({ isMissing, brand, last4, connectChargeAccount, deleteCard }) {
  return (
    <section className="section">
      <div className="has-text-centered">
        <p className="title is-5">Card</p>
        <div className="columns">
          <div className="column is-one-third">
            {isMissing ? <CreditCardMissing/> : <CreditCardAssociated/>}
          </div>
          <div className="column is-one-third">
            <h2 className="subtitle">{isMissing ? "Here can be your card" : `Card ending in ${last4}`}</h2>
          </div>
          <div className="column is-one-third">
            <div className="is-pulled-right">
            {isMissing && (
              <RefreshLink onClick={connectChargeAccount} className="button is-primary is-outlined">
                <CreditCardIcon>Connect Card</CreditCardIcon>
              </RefreshLink>
            )}
            {!isMissing && (
              <RefreshLink onClick={deleteCard} className="button is-danger is-outlined">
                <DeleteIcon>Delete</DeleteIcon>
              </RefreshLink>)
            }
            </div>
          </div>
        </div>
        <h5 className="subtitle payment-text"><b>All charges happen at the end of the month</b></h5>
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




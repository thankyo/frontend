import React from "react";
import moment from "moment";
import { connect } from "react-redux";

import { getCharges } from "reducers/payment/charge/transaction.actions";
import Money from "components/Money";
import EOMChargeStatus from "./EOMChargeStatus";


function EOMCharge({ project, status, amount, yom }){
  return (
    <tr>
      <td><EOMChargeStatus status={status}/></td>
      <td>{moment(yom).format("MMMM YY")}</td>
      <td><Money {... amount}/></td>
    </tr>
  );
}

function ChargesSection({ charges }) {
  return (
    <div className="has-text-centered">
      <p className="title is-5">Charges</p>
      <table className="table is-fullwidth">
        <thead>
        <tr>
          <td className="is-1">Status</td>
          <td className="is-2">Date</td>
          <td className="is-9">Amount</td>
        </tr>
        </thead>
        <tbody>
        {charges.map((charge, i) =>  <EOMCharge key={i} {... charge}/>)}
        </tbody>
      </table>
    </div>
  );
}


const mapStateToProps = ({ payment: { charge: { transaction: { charge: { my: { charges = []} = {} } } } } }) => {
  return { charges };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(getCharges("my"));
  return {}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChargesSection);
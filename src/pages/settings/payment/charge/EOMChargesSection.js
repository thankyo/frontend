import React, { Fragment } from "react";
import { connect } from "react-redux";

import { getChargesCSV, getCharges } from "reducers/payment/charge/transaction.actions";
import EOMChargeTimeline from "components/timeline/EOMChargesTimeline";
import RefreshLink from "components/RefreshLink";

function ChargesSection({ charges, getChargesCSV }) {
  return (
    <section className="section">
      <p className="title is-5 has-text-centered">Charges</p>
      <div className="is-pulled-left">
        <RefreshLink submitting={false} className="is-info" onClick={getChargesCSV}>Download CSV</RefreshLink>
      </div>
      <EOMChargeTimeline charges={charges}/>
    </section>
  );
}


const mapStateToProps = ({ payment: { charge: { transaction: { charge: { my: { charges = []} = {} } } } } }) => {
  return { charges };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(getCharges("my"));
  return {
    getChargesCSV: () => dispatch(getChargesCSV("my"))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChargesSection);
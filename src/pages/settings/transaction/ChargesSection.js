import React, { Fragment } from "react";
import { connect } from "react-redux";

import { getCharges } from "reducers/payment/charge/transaction.actions";
import EOMChargeTimeline from "components/timeline/EOMChargesTimeline";

function ChargesSection({ charges }) {
  return (
    <Fragment>
      <p className="title is-5 has-text-centered">Charges</p>
      <EOMChargeTimeline charges={charges}/>
    </Fragment>
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
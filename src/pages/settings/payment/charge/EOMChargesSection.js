import React, { Fragment } from "react";
import { connect } from "react-redux";

import { getChargesCSV, getCharges } from "reducers/payment/charge/transaction.actions";
import EOMChargeTimeline from "components/timeline/EOMChargesTimeline";
import DownloadCSVButton from "components/DownloadCSVButton";

function ChargesSection({ charges, getChargesCSV }) {
  return (
    <section className="section">
      <div className="title is-5 has-text-centered">
        <DownloadCSVButton onClick={getChargesCSV}/>
        Charges
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
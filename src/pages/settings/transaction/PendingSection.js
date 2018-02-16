import React from "react";
import { connect } from "react-redux";


function PendingSection() {
  return (
    <div className="has-text-centered">
      <p className="title is-5">Pending Transactions</p>
    </div>
  );
}


const mapStateToProps = ({ payment: { chargeAccount } }) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PendingSection);




import React from "react";
import { connect } from "react-redux";


function CompleteSection() {
  return (
    <div className="has-text-centered">
      <p className="title is-5">Complete Transactions</p>
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
)(CompleteSection);




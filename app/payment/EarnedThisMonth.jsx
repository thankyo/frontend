import React from "react";
import { connect } from "react-redux";
import { thisMonthEarnings } from "../reducers/thank/earning.actions";

function EarnedThisMonth({ total }) {
  return (
    <div className="has-text-centered">
      <h3 className="title is-4">This month earnings</h3>
      <h4 className="subtitle">{total}</h4>
    </div>
  );
};

const mapStateToProps = ({ thank: { earning }}) => {
  return earning;
};

const mapDispatchToProps = (dispatch) => {
  dispatch(thisMonthEarnings())
};

export default connect(mapStateToProps, mapDispatchToProps)(EarnedThisMonth);



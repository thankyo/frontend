import React from "react";
import { connect } from "react-redux";
import { authFacebook } from "../reducers/auth.actions.js";

function FacebookAuthPage() {
  return (
    <div className="pageloader is-active"/>
  );
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(authFacebook(window.location.search));
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FacebookAuthPage);
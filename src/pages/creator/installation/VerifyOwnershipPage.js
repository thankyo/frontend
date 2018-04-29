import React, { Component } from "react";
import { connect } from "react-redux";
import { verifyOwnership } from "reducers/project.actions";
import { bindToActions } from "reducers/util/action";

class VerifyOwnershipPage extends Component {
  componentDidMount() {
    let { verifyOwnership, match: { params: { method, token } } } = this.props;
    verifyOwnership(method, token);
  }

  render() {
    return (
      <div>
        <div className="pageloader is-active"/>
      </div>
    );
  }

}

VerifyOwnershipPage = connect(undefined, bindToActions({ verifyOwnership }))(VerifyOwnershipPage);

export default VerifyOwnershipPage;
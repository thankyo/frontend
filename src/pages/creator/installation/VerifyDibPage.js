import React, { Component } from "react";
import { connect } from "react-redux";
import { verifyDibs } from "reducers/project.actions";
import { bindToActions } from "reducers/util/action";

class VerifyDibsPage extends Component {
  componentDidMount() {
    let { verifyDibs, match: { params: { token } } } = this.props;
    verifyDibs(token);
  }

  render() {
    return (
      <div>
        <div className="pageloader is-active"/>
      </div>
    );
  }

}

VerifyDibsPage = connect(undefined, bindToActions({ verifyDibs }))(VerifyDibsPage);

export default VerifyDibsPage;
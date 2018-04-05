import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { authWithFacebook } from "reducers/auth.actions";

class FacebookAuthPage extends Component {
  componentDidMount() {
    this.props.authWithFacebook();
  }

  render() {
    return (
      <div>
        <div className="pageloader is-active"/>
      </div>
    );
  }
}

export default connect(undefined, (dispatch) => bindActionCreators({ authWithFacebook }, dispatch))(FacebookAuthPage);
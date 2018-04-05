import React, { Component } from "react";
import { connect } from "react-redux";
import { authWithGoogle } from "reducers/auth.actions";
import { bindActionCreators } from "redux";

class GoogleAuthPage extends Component {
  componentDidMount() {
    this.props.authWithGoogle();
  }

  render() {
    return (
      <div>
        <div className="pageloader is-active"/>
      </div>
    );
  }

}

export default connect(undefined, (dispatch) => bindActionCreators({ authWithGoogle }, dispatch))(GoogleAuthPage);
import React, { Component } from "react";
import { connect } from "react-redux";
import { authWithSocial } from "reducers/auth.actions";
import { bindActionCreators } from "redux";

class SocialAuthPage extends Component {
  componentDidMount() {
    this.props.authWithSocial(this.props.provider);
  }

  render() {
    return (
      <div>
        <div className="pageloader is-active"/>
      </div>
    );
  }

}

SocialAuthPage = connect(undefined, (dispatch) => bindActionCreators({ authWithSocial }, dispatch))(SocialAuthPage);

export default SocialAuthPage;
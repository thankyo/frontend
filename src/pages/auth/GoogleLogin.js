import React, { Component } from "react";

export default class GoogleLogin extends Component {
  render() {
    let clientId = GOOGLE_KEY;
    let { host, protocol } = window.location;
    let url = `https://accounts.google.com/o/oauth2/auth?scope=profile email https://www.googleapis.com/auth/siteverification&client_id=${clientId}&redirect_uri=${protocol}//${host}/auth/google&response_type=code`;
    return (
      <div onClick={() => window.location = url}>
        {this.props.children}
      </div>
    )
  }
};
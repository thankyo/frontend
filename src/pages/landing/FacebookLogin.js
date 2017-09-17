import React, { Component } from "react";

export default class FacebookLogin extends Component {
    render() {
        let clientId = FACEBOOK_KEY;
        let { host, protocol } = window.location;
        let url = `https://graph.facebook.com/v2.9/oauth/authorize?scope=email&client_id=${clientId}&redirect_uri=${protocol}//${host}/auth/facebook&response_type=code`;
        return (
            <div onClick={() => window.location = url}>
                {this.props.children}
            </div>
        )
    }
};
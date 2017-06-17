import React, { Component } from "react";

export default class FacebookLogin extends Component {
    render() {
        let redirect = `http://${window.location.host}/auth/facebook`
        let clientId = `1429718427098411`;
        let url = `https://graph.facebook.com/v2.3/oauth/authorize?scope=email&client_id=${clientId}&redirect_uri=${redirect}&response_type=code`
        return (
            <div onClick={() => window.location = url}>
                {this.props.children}
            </div>
        )
    }
};
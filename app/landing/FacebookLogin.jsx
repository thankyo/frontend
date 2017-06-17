import React, { Component } from "react";

export default class FacebookLogin extends Component {
    render() {
        let url = process.env.NODE_ENV === 'production' ?
            `https://graph.facebook.com/v2.3/oauth/authorize?scope=email&client_id=1429718427098411&redirect_uri=https://loveit.tips/auth/facebook&response_type=code` :
            `https://graph.facebook.com/v2.3/oauth/authorize?scope=email&client_id=1867505463531006&redirect_uri=http://${window.location.host}/auth/facebook&response_type=code`
        return (
            <div onClick={() => window.location = url}>
                {this.props.children}
            </div>
        )
    }
};
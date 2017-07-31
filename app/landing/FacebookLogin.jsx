import React, { Component } from "react";

export default class FacebookLogin extends Component {
    render() {
        let clientId = process.env.NODE_ENV === 'production' ? 1429718427098411 : 1867505463531006;
        let { host, protocol } = window.location;
        let url = `https://graph.facebook.com/v2.3/oauth/authorize?scope=email&client_id=${clientId}&redirect_uri=${protocol}://${host}/auth/facebook&response_type=code`;
        return (
            <div onClick={() => window.location = url}>
                {this.props.children}
            </div>
        )
    }
};
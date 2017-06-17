import React, { Component } from "react";

export default class FacebookLogin extends Component {
    render() {
        let protocol = process.env.NODE_ENV === 'production' ? `https` : `http`;
        let clientId = process.env.NODE_ENV !== 'production' ? `1867505463531006` : `1429718427098411`;
        let redirect = `${protocol}://${window.location.host}/auth/facebook`;
        let url = `https://graph.facebook.com/v2.3/oauth/authorize?scope=email&client_id=${clientId}&redirect_uri=${redirect}&response_type=code`
        return (
            <div onClick={() => window.location = url}>
                {this.props.children}
            </div>
        )
    }
};
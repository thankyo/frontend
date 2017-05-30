import React, { Component } from "react";
import {connect} from "react-redux";
import {login} from "reducers/auth.actions";

class FacebookLogin extends Component {
    render() {
        return (
            <div onClick={this.props.loginFacebook}>
                {this.props.children}
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginFacebook: () => dispatch(login("facebook"))
    }
};

export default connect(undefined, mapDispatchToProps)(FacebookLogin);
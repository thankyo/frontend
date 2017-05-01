import React from "react";
import {connect} from "react-redux";
import {login} from "../../reducers/auth.actions";

const FacebookLoginButton = ({loginFacebook}) => {
    return (
        <div className="button is-info is-outlined is-hovered is-large" onClick={loginFacebook}>
            Change the world
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginFacebook: () => dispatch(login("facebook"))
    }
};

export default connect(undefined, mapDispatchToProps)(FacebookLoginButton);
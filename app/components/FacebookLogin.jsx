import React from "react";
import {connect} from "react-redux";
import {login} from "../reducers/auth.actions";

const FacebookLoginButton = ({loginFacebook}) => {
    return (
        <div className="button is-info is-outlined is-hovered is-large" onClick={loginFacebook}>
            <span>Be the </span>
                <span className="icon">
                    <i className="fa fa-facebook"></i>
                </span>
            <span>irst</span>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        loginFacebook: () => dispatch(login("facebook"))
    }
};

export default connect(
    undefined,
    mapDispatchToProps
)(FacebookLoginButton);
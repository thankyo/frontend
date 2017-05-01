import React from "react";
import {connect} from "react-redux";
import {login} from "../../reducers/auth.actions";

const FacebookYesOrNoButton = ({loginFacebook}) => {
    return (
                <div className="button is-large is-info" onClick={loginFacebook}>
                    <span className="icon">
                        <i className="fa fa-check"></i>
                    </span>
                    <span>Yes</span>
                </div>
    )
};


const mapDispatchToProps = (dispatch) => {
    return {
        loginFacebook: () => dispatch(login("facebook"))
    }
};

export default connect(undefined, mapDispatchToProps)(FacebookYesOrNoButton);
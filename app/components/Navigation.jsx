import React, {Component} from "react";
import {connect} from "react-redux";
import {login} from "../reducers/auth.actions";
import {logout}     from '../reducers/auth.actions';

class Brand extends Component {
    render() {
        return (
            <div className="nav-left">
                <div className="nav-item is-brand">
                    <span className="icon"><i className="fa fa-heart"></i></span>
                    <span className="icon"></span>
                    <span className="icon"> Thank</span>
                </div>
            </div>
        )
    }
}

class FacebookLoginButton extends Component {
    render() {
        return (
            <div className="button is-info is-outlined is-hovered" onClick={this.props.loginFacebook}>
                <span className="icon">
                    <i className="fa fa-facebook"></i>
                </span>
                <span>Join</span>
            </div>
        )
    }
}

class LogoutButton extends Component {
    render() {
        return (
            <div className="button is-info is-outlined is-hovered" onClick={this.props.logout}>
                <span className="icon">
                    <i className="fa fa-sign-out"></i>
                </span>
                <span>Out</span>
            </div>
        )
    }
}

const AnonymousNavigation = (loginFacebook) => {
    return (
        <nav className="nav is-dark has-shadow">
            <div className="container">
                <Brand/>
                <div className="nav-center">
                    <div className="nav-item is-black">
                        <div className="block">
                            <FacebookLoginButton loginFacebook={loginFacebook}/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
};

const UserNavigation = (logout) => {
    return (
        <nav className="nav is-dark has-shadow">
            <div className="container">
                <Brand/>
                <div className="nav-center">
                    <div className="nav-item is-black">
                        <div className="block">
                            <LogoutButton logout={logout}/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
};

const Navigation = ({menu, loginFacebook, logout}) => {
    if (!menu.enabled) {
        return AnonymousNavigation(loginFacebook);
    } else {
        return UserNavigation(logout);
    }
};

const mapStateToProps = ({menu}) => {
    return {
        menu
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginFacebook: () => dispatch(login("facebook")),
        logout: () => dispatch(logout())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation);
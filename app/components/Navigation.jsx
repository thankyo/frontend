import React, {Component} from "react";
import {connect} from "react-redux";
import {logout}     from '../reducers/auth.actions';
import Brand from './Brand';
import FacebookLogin from './FacebookLogin';
import { Link } from 'react-router';

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

const AnonymousNavigation = () => {
    return (
        <nav className="nav is-dark has-shadow">
            <div className="container">
                <Brand/>
                <div className="nav-center">
                    <div className="nav-item is-black">
                        <div className="block">
                            <FacebookLogin/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
};


class NavigationItem extends Component {
    render() {
        return (
            <Link to={this.props.item.pathname} className={this.props.item.active ? "nav-item is-active" : "nav-item"}>
                <span>{this.props.item.text}</span>
            </Link>
        );
    }
}

const UserNavigation = (menu, logout) => {
    return (
        <nav className="nav is-dark has-shadow">
            <div className="container">
                <Brand/>

                <span className={menu.active ? "nav-toggle is-active" : "nav-toggle"}>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>

                <div className="nav-center">
                    <div id="nav-menu" className={menu.active ? "nav-right nav-menu is-active" : "nav-right nav-menu"}>
                        {menu.items.map((item) => <NavigationItem key={item.pathname} item={item}/>)}
                    </div>
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

const Navigation = ({menu, logout}) => {
    if (!menu.enabled) {
        return AnonymousNavigation();
    } else {
        return UserNavigation(menu, logout);
    }
};

const mapStateToProps = ({menu}) => {
    return {
        menu
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation);
import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import {activateMenu} from "../reducers/menu.actions";

const Navigation = ({ menu, onActivate }) => {
    console.log(JSON.stringify(menu));
    return (
        <nav className="nav">
            <div className="nav-left">
                <div className="nav-item">
                    <Link to="/">
                            <span className="icon">
                                <i className="fa fa-heart-o"></i>
                            </span>
                    </Link>
                </div>
            </div>

            <span className={menu.active ? "nav-toggle is-active" : "nav-toggle"} onClick={onActivate}>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>

            <div id="nav-menu" className={menu.active ? "nav-right nav-menu is-active" : "nav-right nav-menu"}>
                    <span className="nav-item">
                        <Link to="/" className="nav-item">
                            {"Home"}
                        </Link>
                    </span>
                <span className="nav-item">
                        <Link to="/documentation" className="nav-item">
                            {"Documentation"}
                        </Link>
                    </span>
                <span className="nav-item">
                        <Link to="/join" className="button is-primary">
                            <span className="icon">
                                <i className="fa fa-sign-in"></i>
                            </span>
                            <span>Join</span>
                        </Link>
                    </span>
            </div>
        </nav>
    );
};

const mapStateToProps = ({ menu }) => {
    return {
        active: menu.active,
        menu
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onActivate: () => {
            dispatch(activateMenu())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation);
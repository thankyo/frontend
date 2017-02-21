import React, { Component } from "react";
import { Link } from 'react-router';

export default class Navigation extends Component {
    render() {
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

                <span className="nav-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>

                <div className="nav-right nav-menu">
                    <Link to="/"
                          className="nav-item">
                        {"Home"}
                    </Link>
                    <Link to="/documentation"
                        className="nav-item">
                        {"Documentation"}
                    </Link>
                    <span className="nav-item">
                        <Link to="/join"
                            className="button is-primary">
                            <span className="icon">
                                <i className="fa fa-sign-in"></i>
                            </span>
                            <span>Join</span>
                        </Link>
                    </span>
                </div>

            </nav>
    )}
}

import React, { Component } from "react";
import { Link } from 'react-router';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = { active: false };
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }
    handleMenuClick() {
        let active = this.state.active;
        this.setState({ active: !active});
    }
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

                <span className={this.state.active ? "nav-toggle is-active" : "nav-toggle"} onClick={this.handleMenuClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>

                <div id="nav-menu" className={this.state.active ? "nav-right nav-menu is-active" : "nav-right nav-menu"}>
                    <Link to="/" className="nav-item">
                        {"Home"}
                    </Link>
                    <Link to="/documentation" className="nav-item">
                        {"Documentation"}
                    </Link>
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
    )}
}

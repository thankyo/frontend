import React, {Component} from "react";
import Brand from "../Brand";
import FacebookLoginButton from "./FacebookLoginButton";
import { Link } from "react-router";

export default class Hero extends Component {
    render() {
        return (
            <section className="hero is-large header-image">
                <div className="hero-head">
                    <header className="nav">
                        <div className="container">
                            <div className="nav-left">
                                <Brand/>
                            </div>
                            <div className="nav-item">
                                <Link to="/creator">Creator</Link>
                            </div>
                        </div>
                    </header>
                </div>
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title is-1">
                            Make world better
                        </h1>
                        <h2 className="subtitle is-3">
                            Give back to what you love
                        </h2>
                        <FacebookLoginButton/>
                    </div>
                </div>
            </section>
        );
    }
}
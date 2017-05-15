import React, {Component} from "react";
import Brand from "../../Brand";
import {Link} from "react-router";
import FacebookLogin from "../FacebookLogin";

export default class Hero extends Component {
    render() {
        return (
            <section className="hero is-medium is-success">
                <div className="hero-head">
                    <header className="nav">
                        <div className="container">
                            <div className="nav-left">
                                <Brand/>
                            </div>
                            <div className="nav-item">
                                <Link to="/creator" className="is-active">Contributor</Link>
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
                            Tip like a boss
                        </h1>
                        <h2 className="subtitle is-3">
                            Microtip revolution
                        </h2>
                        <FacebookLogin>
                            <div className="button is-info is-outlined is-hovered is-large">
                                <span>Change the world</span>
                            </div>
                        </FacebookLogin>
                    </div>
                </div>
            </section>
        );
    }
}
import React, { Component } from 'react';
import Brand from "../../Brand";
import {Link} from "react-router";
import FacebookLogin from '../FacebookLogin';

class CreatorHead extends Component {
    render() {
        return (
            <div className="hero-head">
                <header className="nav">
                    <div className="container">
                        <Brand/>
                        <div className="nav-right">
                            <div className="nav-item">
                                <Link to="/">Contributor</Link>
                            </div>
                            <div className="nav-item">
                                <Link to="/creator" className="is-active"> Creator</Link>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default class Hero extends Component {
    render() {
        return (
            <section className="hero is-medium is-success">
                <div className="has-text-centered">
                    <CreatorHead/>
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title is-1">
                                Fund your passion
                            </h1>
                            <h2 className="subtitle is-3">
                                Connect to your most loyal fans<br/>
                            </h2>
                            <FacebookLogin>
                                <div className="button is-info is-outlined is-hovered is-large">
                                    <span>Just try</span>
                                </div>
                            </FacebookLogin>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
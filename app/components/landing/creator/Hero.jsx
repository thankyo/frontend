import React, { Component } from 'react';
import Brand from "../../Brand";
import {Link} from "react-router";

class CreatorHead extends Component {
    render() {
        return (
            <div className="hero-head">
                <header className="nav">
                    <div className="container">
                        <Brand/>
                        <div className="nav-right">
                            <div className="nav-item is-brand">
                                <Link to="/creator" className="is-active">Creator</Link>
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
            <section className="hero is-large is-success">
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
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
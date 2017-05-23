import React, { Component } from 'react';
import Brand from "components/Brand";
import {Link} from "react-router";
import FacebookLogin from 'components/landing/FacebookLogin';

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
        let style = {
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.49),rgba(0, 0, 0, 0.89)),url('/images/landing/creator/A/Hero.jpg')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        };
        return (
            <section className="hero is-large is-success" style={style}>
                <div className="has-text-centered">
                    <CreatorHead/>
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title is-1">
                                Fund your passion
                            </h1>
                            <h2 className="subtitle is-3">
                                Microtip revolution<br/>
                            </h2>
                            <FacebookLogin>
                                <div className="button is-info is-outlined is-inverted is-hovered is-large">
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
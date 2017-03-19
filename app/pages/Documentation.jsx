import React, { Component } from "react";

import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default class Documentation extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <section className="hero is-primary">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns is-vcentered">
                                <div className="column">
                                    <p className="title">
                                        Documentation
                                    </p>
                                    <p className="subtitle">
                                        Everything you need to <strong>integrate a website</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hero-foot">
                        <div className="container">
                            <nav className="tabs is-boxed">
                                <ul>
                                    <li className="is-active">
                                        <a href="/documentation/overview">Overview</a>
                                    </li>
                                    <li>
                                        <a href="/documentation/js">JS integration</a>
                                    </li>
                                </ul>
                            </nav></div>
                    </div>
                </section>
                <div className="section">
                    <div className="content">
                        <h1>I'm documented</h1>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
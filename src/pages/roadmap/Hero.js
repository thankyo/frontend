import React, {Component} from "react";

export default class Hero extends Component {
    render() {
        return (
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-vcentered">
                            <div className="column">
                                <p className="title">
                                    Roadmap
                                </p>
                                <p className="subtitle">
                                    Our plans for the future
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
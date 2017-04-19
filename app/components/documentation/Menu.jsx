import React, {Component} from "react";

export default class DocumentationMenu extends Component {
    render() {
        return (
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
            </section>
        );
    }
}
import React, {Component} from "react";

export default class Wrap extends Component {
    render() {
        return (
            <section className={this.props.className + " hero"}>
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="columns">
                            <div className="column is-3 is-hidden-mobile">
                            </div>
                            <div className="column is-6 has-text-centered">
                                {this.props.children}
                            </div>
                            <div className="column is-2 is-hidden-mobile">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
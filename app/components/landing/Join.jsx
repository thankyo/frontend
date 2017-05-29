import React, {Component} from "react";
import Brand from "components/Brand";
import FacebookLogin from "components/landing/FacebookLogin";

export default class Join extends Component {
    render() {
        return (
            <section className="hero is-large">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title is-1">
                            {this.props.title}
                        </h1>
                        <h2 className="subtitle is-3">{this.props.subtitle}</h2>
                        <FacebookLogin>
                            <div className="button is-inverted is-outlined is-hovered is-large">
                                <span>{this.props.button}</span>
                            </div>
                        </FacebookLogin>
                    </div>
                </div>
            </section>
        );
    }
}
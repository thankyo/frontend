import React, {Component} from "react";
import PropTypes from "prop-types";

class Proof extends Component {
    render() {
        let nativeLink = `/images/landing/proof/${this.props.text}.jpg`;
        return (
            <div className="column">
                <div className="image is-1by1 sui-avatar">
                    <img src={nativeLink} alt={this.props.text}/>
                </div>
            </div>
        )
    }
}

export default class Proofs extends Component {
    render() {
        return (
            <section className="hero">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="columns">
                            <div className="column">
                            </div>
                            <div className="column is-2 is-primary">
                                <Proof text={this.props.proofs[0]}/>
                            </div>
                            <div className="column is-2">
                                <Proof text={this.props.proofs[1]}/>
                            </div>
                            <div className="column is-2">
                                <Proof text={this.props.proofs[2]}/>
                            </div>
                            <div className="column">
                            </div>
                        </div>
                        <div className="title is-2 hand-written">{this.props.subtitle}</div>
                    </div>
                </div>
            </section>
        )
    }
}

Proofs.propTypes = {
    proofs: PropTypes.arrayOf(PropTypes.string).isRequired,
    subtitle: PropTypes.string.isRequired
};
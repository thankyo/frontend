import React, {Component} from "react";
import PropTypes from "prop-types";

class Proof extends Component {
    render() {
        let nativeLink = `/images/landing/proof/${this.props.text}.jpg`;
        return (
                <div className="sui-avatar">
                    <img src={nativeLink} alt={this.props.text} width={180} height={180}/>
                </div>
        )
    }
}

Proof.propTypes = {
    text: PropTypes.string.isRequired,
};

export default class Proofs extends Component {
    render() {
        return (
            <section className="hero">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="is-flex">
                            <div className="column is-3 is-hidden-mobile">
                            </div>
                            <div className="column is-one-third-mobile">
                                <Proof text={this.props.proofs[0]}/>
                            </div>
                            <div className="column is-one-third-mobile">
                                <Proof text={this.props.proofs[1]}/>
                            </div>
                            <div className="column is-one-third-mobile">
                                <Proof text={this.props.proofs[2]}/>
                            </div>
                            <div className="column is-3 is-hidden-mobile">
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
    subtitle: PropTypes.string.isRequired,
};
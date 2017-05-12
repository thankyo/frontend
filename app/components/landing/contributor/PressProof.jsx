import React, {Component} from "react";

class Proof extends Component {
    render() {
        let nativeLink = `/images/landing/contributor/${this.props.text}.png`;
        return (
            <div className="column">
                <div className="image is-1by1 sui-avatar">
                    <img src={nativeLink} alt={this.props.text}/>
                </div>
            </div>
        )
    }
}


export default class ContributorPressProof extends Component {
    render() {
        return (
            <section className="hero">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="columns">
                            <div className="column">
                            </div>
                            <div className="column is-2 is-primary">
                                <Proof text="Times"/>
                            </div>
                            <div className="column is-2">
                                <Proof text="Mashable"/>
                            </div>
                            <div className="column is-2">
                                <Proof text="Tech Crunch"/>
                            </div>
                            <div className="column is-2">
                                <Proof text="HBO"/>
                            </div>
                            <div className="column">
                            </div>
                        </div>
                        <div className="title is-2">Have no idea we exist, YET</div>
                    </div>
                </div>
            </section>
        )
    }
}
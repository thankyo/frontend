import React, {Component} from "react";

class Proof extends Component {
    render() {
        let nativeLink = `/images/landing/contributor/${this.props.text}.jpg`;
        return (
            <div className="column">
                <div className="image is-1by1 sui-avatar">
                    <img src={nativeLink} alt={this.props.text}/>
                </div>
            </div>
        )
    }
}


export default class ContributorSocialProof extends Component {
    render() {
        return (
            <section className="hero">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="columns">
                            <div className="column">
                            </div>
                            <div className="column is-2">
                                <Proof text="Tesla"/>
                            </div>
                            <div className="column is-2">
                                <Proof text="Ghandi"/>
                            </div>
                            <div className="column is-2">
                                <Proof text="Picaso"/>
                            </div>
                            <div className="column">
                            </div>
                        </div>
                        <div className="title is-2 hand-written">Could be our first users</div>
                    </div>
                </div>
            </section>
        )
    }
}
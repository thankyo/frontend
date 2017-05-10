import React, {Component} from "react";
import FacebookLogin from "../FacebookLogin";

class Proof extends Component {
    render() {
        let link = `https://placehold.it/180x180?text=${this.props.text}`;
        return (
            <div className="column">
                <div className="image is-1by1 sui-avatar">
                    <img src={link} alt={this.props.text}/>
                </div>
            </div>
        )
    }
}


export default class ContributorSocialProof extends Component {
    render() {
        return (
            <section className="hero is-warning">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="columns">
                            <div className="column">
                            </div>
                            <div className="column is-2 is-primary">
                                <Proof text="EINSTEIN"/>
                            </div>
                            <div className="column is-2">
                                <Proof text="TESLA"/>
                            </div>
                            <div className="column is-2">
                                <Proof text="Che"/>
                            </div>
                            <div className="column is-2">
                                <Proof text="Gandi"/>
                            </div>
                            <div className="column">
                            </div>
                        </div>
                        <div className="title is-2">Could be our first users</div>
                        <FacebookLogin>
                            <a className="subtitle is-link">They can't, but you can</a>
                        </FacebookLogin>
                    </div>
                </div>
            </section>
        )
    }
}
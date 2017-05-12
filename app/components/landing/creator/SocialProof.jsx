import React, {Component} from "react";
import FacebookLogin from "../FacebookLogin";


class Proof extends Component {
    render() {
        let link = `https://placehold.it/256x256?text=${this.props.text}`;
        return (
            <div className="column">
                <div className="image is-1by1 sui-avatar">
                    <img src={link}/>
                </div>
            </div>
        )
    }
}

export default class SocialProof extends Component {
    render() {
        return (
            <section className="hero">
                <div className="hero-body">
                    <div className="container has-text-centered">

                        <div className="columns">
                            <div className="column">
                            </div>
                            <div className="column is-2 is-primary">
                                <Proof text="New York Times"/>
                            </div>
                            <div className="column is-2">
                                <Proof text="YouTube"/>
                            </div>
                            <div className="column is-2">
                                <Proof text="Dribbble"/>
                            </div>
                            <div className="column is-2">
                                <Proof text="Medium"/>
                            </div>
                            <div className="column">
                            </div>
                        </div>
                        <div className="title is-2">Our future clients</div>
                        <div className="subtitle is-4">Too bad, they have no idea we exist</div>
                        <FacebookLogin>
                            <a className="subtitle is-link">pave the way</a>
                        </FacebookLogin>
                    </div>
                </div>
            </section>
        )
    }
}
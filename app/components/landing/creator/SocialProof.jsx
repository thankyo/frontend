import React, {Component} from "react";
import FacebookLogin from "../FacebookLogin";


class Proof extends Component {
    render() {
        let type = this.props.type ? this.props.type : "jpg";
        let link = `/images/landing/creator/${this.props.text}.${type}`;
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
                            <div className="column is-2">
                                <Proof text="YouTube"/>
                            </div>
                            <div className="column is-2">
                                <Proof text="Dribbble" type="png"/>
                            </div>
                            <div className="column is-2">
                                <Proof text="Medium"/>
                            </div>
                            <div className="column">
                            </div>
                        </div>
                        <div className="title is-2 hand-written">Our future clients (don't tell them yet)</div>
                    </div>
                </div>
            </section>
        )
    }
}
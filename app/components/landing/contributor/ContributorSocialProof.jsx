import React, {Component} from "react";
import FacebookLogin from "../FacebookLogin";


class SocialProof extends Component {
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


export default class ContributorSocialProof extends Component {
    render() {
        return (
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container has-text-centered">

                        <div className="columns">
                            <div className="column">
                            </div>
                            <div className="column is-2 is-primary">
                                <SocialProof text="EINSTEIN"/>
                            </div>
                            <div className="column is-2">
                                <SocialProof text="TESLA"/>
                            </div>
                            <div className="column is-2">
                                <SocialProof text="Che"/>
                            </div>
                            <div className="column is-2">
                                <SocialProof text="U"/>
                            </div>
                            <div className="column">
                            </div>
                        </div>
                        <div className="title is-2">Could be our first users</div>
                        <FacebookLogin>
                            <a className="subtitle is-link">What about you?</a>
                        </FacebookLogin>
                    </div>
                </div>
            </section>
        )
    }
}
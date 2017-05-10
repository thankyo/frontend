import React, {Component} from "react";
import FacebookLogin from '../FacebookLogin';

export default class ContributorWhat extends Component {
    render() {
        return (
            <section className="hero">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="columns">
                            <div className="column is-3"></div>
                            <div className="column is-6">
                                <div className="title is-3">WHAAT</div>
                                <div className="is-4 has-text-left">
                                    <strong>Is this a joke?</strong><br/>
                                    <strong>No, not really</strong>, we want to put a <strong>LoveIt button</strong> on every digital piece, we can reach.
                                    <br/>
                                    <br/>
                                    <strong>What is LoveIt button?</strong><br/>
                                    First of all it's a button and you click it, whenever you see one.<br/>
                                    Creator gets <strong>10c</strong> feels appreciated, loved and understood, by the world and <strong>you did something good</strong>.
                                    <br/>
                                    <br/>
                                    <strong>Why only 10c?</strong><br/>
                                    Well, we think this should be a <strong>healthy habit</strong>, not a do once and forget until Christmas.
                                    Feeling good is everyday thing, it works 24/7 holidays especially.
                                    <br/>
                                    <br/>
                                    <strong>What else do I get?</strong><br/>
                                    <ul>
                                        <li><strong>Control over the internet</strong>, since creator does not need to sell you things that you don't really need and spend his time focusing on the creation.</li>
                                        <li><strong>Free things</strong>, like press, journalism, art, opinions, be the people.</li>
                                        <li><strong>Feeling good</strong>, we mentioned it before.</li>
                                    </ul>
                                    <br/>
                                    <br/>
                                    <FacebookLogin>
                                        <div className="has-text-centered">
                                            <div className="button is-info is-large">Join</div>
                                        </div>
                                    </FacebookLogin>
                                </div>
                            </div>
                            <div className="is-4"></div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


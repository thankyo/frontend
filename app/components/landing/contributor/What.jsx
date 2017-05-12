import React, {Component} from "react";
import FacebookLogin from '../FacebookLogin';

export default class What extends Component {
    render() {
        return (
            <section className="hero is-success">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="columns">
                            <div className="column is-3 is-hidden-mobile"></div>
                            <div className="column is-6">
                                <div className="title is-3">What is this all about</div>
                                <div className="is-4 has-text-left">
                                    <strong>Is this a joke</strong><br/>
                                    <strong>No, not really</strong>, we just don't take our self too serious, it helps a lot, just try and see.
                                    <br/>
                                    <br/>
                                    <strong>What are you selling</strong><br/>
                                    We are starting a microtip revolution - putting a <strong>LoveIt button</strong> on every digital piece, we can reach.
                                    Change the world one click at a time.
                                    <br/>
                                    <br/>
                                    <strong>What is LoveIt button</strong><br/>
                                    First of all it's a button and you click it, whenever you see one.<br/>
                                    Creator gets <strong>10c</strong> feels appreciated, loved and understood, by the world and <strong>you did something good</strong>.
                                    <br/>
                                    <br/>
                                    <strong>Why only 10c</strong><br/>
                                    Well, we think this should be a <strong>healthy habit</strong>, not a do once and forget until Christmas.
                                    Feeling good is everyday thing, it works 24/7 holidays included.
                                    <br/>
                                    <br/>
                                    <strong>Are you going to know everything about me, like FB and Google do?</strong><br/>
                                    No, we have no desire to do so. Your information belongs to you and only you, we might use it in
                                    for technical needs, but nothing more.
                                    <br/>
                                    <br/>
                                    <strong>What else do I get</strong><br/>
                                    <ul>
                                        <li><strong>Free things</strong>, like press, journalism, art and so much more.</li>
                                        <li><strong>Bragging rights</strong>.</li>
                                        <li><strong>Control over the internet</strong>, after reaching a critical mass.</li>
                                    </ul>
                                    <br/>
                                    <br/>
                                    <FacebookLogin>
                                        <div className="has-text-centered">
                                            <div className="button is-info is-large">Just join it</div>
                                        </div>
                                    </FacebookLogin>
                                </div>
                            </div>
                            <div className="is-4 is-hidden-mobile"></div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


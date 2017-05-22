import React, {Component} from "react";
import FacebookLogin from '../../FacebookLogin';

export default class What extends Component {
    render() {
        return (
            <section className="hero is-info">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="columns">
                            <div className="column is-3 is-hidden-mobile"></div>
                            <div className="column is-6">
                                <div className="title is-3 hand-written">What is this all about</div>
                                <div className="is-4 has-text-left">
                                    <strong className="hand-written">What are you selling</strong><br/>
                                    We are starting a microtip revolution - putting a <strong>LoveIt button</strong> on every digital piece, we can reach.
                                    Change the world one click at a time.
                                    <br/>
                                    <br/>
                                    <strong className="hand-written">What is LoveIt button</strong><br/>
                                    It's basically Facebook Like button, but with a bit more meaning. Every time you click it
                                    creator gets <strong>10c</strong> and hears your voice of appreciation.
                                    <br/>
                                    <br/>
                                    <strong className="hand-written">Why only 10c</strong><br/>
                                    Well, we think this should be a <strong>healthy habit</strong>, not a do once and forget until Christmas.
                                    Feeling good is everyday thing, it works 24/7 holidays included.
                                    <br/>
                                    <br/>
                                    <strong className="hand-written">What else do I get</strong><br/>
                                    <ul>
                                        <li><strong>Free things</strong>, like press, journalism, art and so much more.</li>
                                        <li><strong>Bragging rights</strong>.</li>
                                        <li><strong>Control over the internet</strong>, after reaching a critical mass.</li>
                                    </ul>
                                    <br/>
                                    <br/>
                                    <FacebookLogin>
                                        <div className="has-text-centered">
                                            <div className="button is-info is-large is-inverted is-outlined">Just join it</div>
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


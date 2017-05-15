import React, {Component} from "react";
import Subscribe from '../Subscribe';

export default class NotReadyToJoin extends Component {
    render() {
        return (
            <section className="hero is-medium is-success">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title is-1">
                            Not ready to join, but curios
                        </h1>
                        <h2 className="subtitle is-3">
                            We'll keep you in the loop, no spam, we promise.
                        </h2>
                        <div className="columns">
                            <div className="column is-4 is-hidden-mobile">
                            </div>
                            <Subscribe role="creator"/>
                            <div className="column is-4 is-hidden-mobile">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
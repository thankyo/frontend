import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";

class NotReadyToJoin extends Component {
    render() {
        let notReadyToJoin = {
            backgroundImage: 'url(/images/landing/contributor/notReadyToJoin.png)'
        };
        return (
            <section className="hero is-medium is-primary" style={notReadyToJoin}>
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
                            <div className="column is-4">
                                <div className="field has-addons">
                                    <p className="control is-expanded">
                                        <Field name="email" component="input" type="email" className="input"
                                               placeholder="Email"/>
                                    </p>
                                    <p className="control">
                                        <button className="button is-success" type="submit">
                                            Subscribe
                                        </button>
                                    </p>
                                </div>
                            </div>
                            <div className="column is-4 is-hidden-mobile">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default reduxForm({form: 'notReadyCreator'})(NotReadyToJoin);
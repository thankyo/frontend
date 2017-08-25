import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import subscribe from '../../reducers/util/subscription';

let SubscribeForm = ({ handleSubmit }) => {
    return (
        <form className="column is-4" onSubmit={ handleSubmit }>
            <div className="field has-addons">
                <p className="control is-expanded">
                    <Field name="email" component="input" type="email" className="input"
                           placeholder="Email"/>
                </p>
                <p className="control">
                    <button className="button is-info is-outlined is-inverted" type="submit">
                        Subscribe
                    </button>
                </p>
            </div>
        </form>
    );
};

SubscribeForm = reduxForm({form: 'subscribe'})(SubscribeForm);

class Subscribe extends Component {
    render() {
        return (
            <SubscribeForm onSubmit={  subscribe(this.props.role) }/>
        )
    }
}

export default class NotReadyToJoin extends Component {
    render() {
        return (
            <section className="hero is-medium is-info hand-written">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title is-1">
                            Not ready to join, but curious
                        </h1>
                        <h2 className="subtitle is-3">
                            Let's keep in touch.
                        </h2>
                        <div className="columns">
                            <div className="column is-4 is-hidden-mobile">
                            </div>
                            <Subscribe role={this.props.role}/>
                            <div className="column is-4 is-hidden-mobile">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
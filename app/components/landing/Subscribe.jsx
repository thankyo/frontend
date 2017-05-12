import React, { Component } from "react";
import {Field, reduxForm} from "redux-form";
import subscribe from '../../service/subscription';

let SubscribeForm = ({ handleSubmit }) => {
    return (
        <form className="column is-4" onSubmit={ handleSubmit }>
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
        </form>
    );
};

SubscribeForm = reduxForm({form: 'subscribe'})(SubscribeForm);

export default class Subscribe extends Component {
    render() {
        return (
            <SubscribeForm onSubmit={  subscribe(this.props.role) }/>
        )
    }
}

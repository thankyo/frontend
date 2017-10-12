import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import subscribe from '../../reducers/util/subscription';

let SubscribeForm = ({ handleSubmit }) => {
  return (
    <form className="column is-4" onSubmit={ handleSubmit }>
      <div className="field has-addons">
        <div className="control is-expanded">
          <Field name="email" component="input" type="email" className="input" placeholder="Email"/>
        </div>
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
import React from "react";
import { Field, reduxForm } from "redux-form";

let LogInForm = ({ handleSubmit }) => {
  return (
    <form className="column is-4" onSubmit={handleSubmit}>
      <div className="field has-addons">
        <p className="control">
          <div class="field">
            <div class="control">
              <Field name="email" component="input" type="email" className="input" placeholder="Email"/>
            </div>
          </div>
        </p>
        <p className="control">
          <Field name="password" component="input" type="password" className="input" placeholder="Password"/>
        </p>
        <p className="control">
          <button className="button is-info is-outlined is-inverted" type="submit">
            Login
          </button>
        </p>
      </div>
    </form>
  );
};

LogInForm = reduxForm({ form: 'signUp' })(LogInForm);

export default function () {
  return (
    <section className="hero is-fullscreen is-info">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1">
            Log In
          </h1>
          <div className="columns">
            <div className="column is-4 is-hidden-mobile">
            </div>
            <LogInForm/>
          </div>
        </div>
      </div>
    </section>
  );
}
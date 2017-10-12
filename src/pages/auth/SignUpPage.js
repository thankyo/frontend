import React from "react";
import { Field, Form, reduxForm } from "redux-form";
import auth from "../../reducers/util/auth";

export const renderField = ({
                       input,
                       className,
                       placeholder,
                       type,
                       meta: { asyncValidating, touched, error }
                     }) =>
  (
    <div className="field">
      <div className="control">
        <input {...input} type={type} className={className} placeholder={placeholder}/>
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );


let SignUpForm = ({ handleSubmit }) => {
  return (
    <Form className="column is-4" onSubmit={handleSubmit}>
      <Field name="firstName" component={renderField} type="string" className="input" placeholder="First name"/>
      <Field name="lastName" component={renderField} type="string" className="input" placeholder="Last name"/>
      <Field name="email" component={renderField} type="email" className="input" placeholder="Email"/>
      <Field name="password" component={renderField} type="password" className="input" placeholder="Password"/>
      <button className="button is-info is-outlined is-inverted" type="submit">
        Sign Up
      </button>
    </Form>
  );
};

let ReduxSignUpForm = reduxForm({ form: 'signUp' })(SignUpForm);

export default function () {
  return (
    <section className="hero is-fullheight is-info">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1">
            Sign Up
          </h1>
          <div className="columns">
            <div className="column is-4 is-hidden-mobile">
            </div>
            <ReduxSignUpForm onSubmit={(req) => auth.signUp(req)}/>
          </div>
        </div>
      </div>
    </section>
  );
}
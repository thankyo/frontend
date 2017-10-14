import React from "react";
import { Field, Form, reduxForm } from "redux-form";
import AuthMenu from "./AuthMenu";
import FacebookLogin from "./FacebookLogin";
import { Route, Switch } from 'react-router-dom';
import auth from "../../reducers/util/auth";
import { renderField } from "./utils";

const required = value => value ? undefined : 'Required';

let LoginForm = ({ handleSubmit, error, submitting }) => {

  return (
    <Form onSubmit={handleSubmit} disabled={submitting}>
      <Field name="email" component={renderField} type="email" className="input" placeholder="Email" validate={[required]}/>
      <Field name="password" component={renderField} type="password" className="input" placeholder="Password" validate={[required]}/>

      <div className="field has-addons">
        <p className="control">
          <button className={`button is-info is-outlined is-inverted ${submitting && "is-loading"}`} type="submit">
            <span className="icon is-small"><i className="fa fa-sign-in"/></span>
            <span>Log in</span>
          </button>
        </p>
        <p className="control">
          <button className={`button is-info is-outlined is-inverted ${submitting && "is-loading"}`}>
            <span className="icon is-small"><i className="fa fa-question"/></span>
            <span>Forgot password</span>
          </button>
        </p>
      </div>
    </Form>
  );
};

let ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm);

let RegisterForm = ({ handleSubmit, submitting }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Field name="firstName" component={renderField} type="string" className="input" placeholder="First name" validate={[required]}/>
      <Field name="lastName" component={renderField} type="string" className="input" placeholder="Last name" validate={[required]}/>
      <Field name="email" component={renderField} type="email" className="input" placeholder="Email" validate={[required]}/>
      <Field name="password" component={renderField} type="password" className="input" placeholder="Password" validate={[required]}/>
      <div className="field has-addons">
        <p className="control">
          <button className={`button is-info is-outlined is-inverted ${submitting && "is-loading"}`} type="submit">
            <span className="icon is-small"><i className="fa fa-registered"/></span>
            <span>Register</span>
          </button>
        </p>
      </div>
    </Form>
  );
};

let ReduxRegistrationForm = reduxForm({ form: 'register' })(RegisterForm);

export default function ({ history }) {
  return (
    <section className="hero is-fullheight is-primary register-page">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-two-thirds">
            </div>
            <div className="column is-one-third has-text-centered">
              <FacebookLogin>
                <a className="button is-primary is-inverted is-outlined">
                  <span className="fa fa-facebook-official"/>&nbsp;
                  <span>Connect with FB</span>
                </a>
              </FacebookLogin>
              <br/>
              <br/>
              <h4 className="subtitle is-5">or</h4>
              <AuthMenu/>
              <Switch>
                <Route exact path="/auth">
                  <ReduxRegistrationForm onSubmit={(regReq) => auth.signUp(regReq, history)}/>
                </Route>
                <Route path="/auth/login">
                  <ReduxLoginForm onSubmit={(logInReq) => auth.login(logInReq, history)}/>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
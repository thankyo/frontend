import React from "react";
import { Field, Form, reduxForm } from "redux-form";
import AuthMenu from "./AuthMenu";
import FacebookLogin from "./FacebookLogin";
import { Link, Route, Switch } from 'react-router-dom';
import auth from "../../reducers/util/auth";
import { renderField } from "./utils";

const required = value => value ? undefined : 'Required';

let ForgotForm = ({ handleSubmit, submitting }) => {
  return (
    <Form onSubmit={handleSubmit} className="is-primary">
      <Field name="email" component={renderField} type="email" className="input" placeholder="Email"
             validate={[required]} disabled={submitting}/>

      <div className="field has-addons">
        <p className="control">
          <button className="button is-info is-outlined is-inverted" type="submit">
            <span className="icon is-small"><i className="fa fa-send"/></span>
            <span>Restore</span>
          </button>
        </p>
      </div>
    </Form>
  );
};

let ReduxForgotForm = reduxForm({ form: 'forgot' })(ForgotForm);

let LoginForm = ({ handleSubmit, submitting }) => {

  return (
    <Form onSubmit={handleSubmit} className="is-primary">
      <Field name="email" component={renderField} type="email" className="input" placeholder="Email"
             validate={[required]} disabled={submitting}/>
      <Field name="password" component={renderField} type="password" className="input" placeholder="Password"
             validate={[required]} disabled={submitting}/>

      <div className="field has-addons">
        <p className="control">
          <button className={`button is-info is-outlined is-inverted ${submitting && "is-loading"}`} type="submit">
            <span className="icon is-small"><i className="fa fa-sign-in"/></span>
            <span>Log in</span>
          </button>
        </p>
        <p className="control">
          <Link className="button is-info is-outlined is-inverted" to="/auth/forgot">
            <span className="icon is-small"><i className="fa fa-question"/></span>
            <span>Forgot password</span>
          </Link>
        </p>
      </div>
    </Form>
  );
};

let ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm);

let RegisterForm = ({ handleSubmit, submitting }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Field name="firstName" component={renderField} type="string" className="input" placeholder="First name"
             validate={[required]}/>
      <Field name="lastName" component={renderField} type="string" className="input" placeholder="Last name"
             validate={[required]}/>
      <Field name="email" component={renderField} type="email" className="input" placeholder="Email"
             validate={[required]}/>
      <Field name="password" component={renderField} type="password" className="input" placeholder="Password"
             validate={[required]}/>
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

function FacebookHeader() {
  return (
    <div>
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
      <br/>
    </div>
  );
}

export default function ({ history }) {
  return (
    <section className="hero is-fullheight is-primary register-page">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-two-thirds">
            </div>
            <div className="column is-one-third has-text-centered">
              <Switch>
                <Route exact path="/auth">
                  <div>
                    <FacebookHeader/>
                    <ReduxRegistrationForm onSubmit={(regReq) => auth.signUp(regReq, history)}/>
                  </div>
                </Route>
                <Route path="/auth/login">
                  <div>
                    <FacebookHeader/>
                    <ReduxLoginForm onSubmit={(logInReq) => auth.login(logInReq, history)}/>
                  </div>
                </Route>
                <Route path="/auth/forgot">
                  <ReduxForgotForm onSubmit={(forgotReq) => auth.forgot(forgotReq, history)}/>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
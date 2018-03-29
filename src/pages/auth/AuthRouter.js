import React, { Fragment } from "react";
import { Field, Form, reduxForm } from "redux-form";
import AuthNavigation from "./AuthNavigation";
import { connect } from "react-redux";
import { Link, Route, Switch } from 'react-router-dom';
import auth from "reducers/util/auth";
import { renderField, required, LoadingButton, max64 } from "components/form/form.utils";
import { FacebookIcon, LoginIcon, RegisterIcon, RestoreIcon, SendIcon } from "components/Icon";
import FacebookAuthPage from "./FacebookAuthPage";
import GoogleAuthPage from "./GoogleAuthPage";

const ResetForm = ({ handleSubmit, submitting }) => {
  return (
    <Form onSubmit={handleSubmit} className="is-primary">
      <Field
        name="password"
        component={renderField}
        type="password"
        placeholder="New Password"
        validate={[required, max64]}
        disabled={submitting}
      />
      <div className="field has-addons">
        <LoadingButton submitting={submitting}>
          <RestoreIcon>Restore</RestoreIcon>
        </LoadingButton>
      </div>
    </Form>
  );
};

const ReduxResetForm = reduxForm({ form: 'reset' })(ResetForm);

const ForgotForm = ({ handleSubmit, submitting }) => {
  return (
    <Form onSubmit={handleSubmit} className="is-primary">
      <Field name="email" component={renderField} type="email" placeholder="Email"
             validate={[required]} disabled={submitting}/>

      <div className="field">
        <LoadingButton submitting={submitting}>
          <SendIcon>Send a password restore link</SendIcon>
        </LoadingButton>
      </div>
    </Form>
  );
};

const ReduxForgotForm = reduxForm({ form: 'forgot' })(ForgotForm);

const LoginForm = ({ handleSubmit, submitting }) => {
  return (
    <Form onSubmit={handleSubmit} className="is-primary">
      <Field name="email" component={renderField} type="email" placeholder="Email"
             validate={[required]} disabled={submitting}/>
      <Field name="password" component={renderField} type="password" placeholder="Password"
             validate={[required, max64]} disabled={submitting}/>

      <div className="field has-addons">
        <LoadingButton submitting={submitting}>
          <LoginIcon>Log in</LoginIcon>
        </LoadingButton>
      </div>
    </Form>
  );
};

const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm);

const RegisterForm = ({ handleSubmit, submitting }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Field name="firstName" component={renderField} type="string" placeholder="First name"
             validate={[required]}/>
      <Field name="lastName" component={renderField} type="string" placeholder="Last name"
             validate={[required]}/>
      <Field name="email" component={renderField} type="email" placeholder="Email"
             validate={[required]}/>
      <Field name="password" component={renderField} type="password" placeholder="Password"
             validate={[required, max64]}/>
      <div className="field has-addons">
        <LoadingButton submitting={submitting}>
          <RegisterIcon>Register</RegisterIcon>
        </LoadingButton>
      </div>
    </Form>
  );
};

const ReduxRegistrationForm = reduxForm({ form: 'register' })(RegisterForm);

let SocialHeader = ({ facebook }) => (
    <div className="has-text-centered">
      <p className="control has-text-centered">
        <a className="button is-primary is-inverted is-outlined" href={facebook}>
          <FacebookIcon>Connect with FB</FacebookIcon>
        </a>
      </p>
    </div>
  );

SocialHeader = connect(({ auth: { url }}) => url)(SocialHeader);

function ForgotPasswordLink() {
  return (
    <p className="control">
      <Link className="is-info is-outlined is-inverted is-pulled-right" to="/auth/forgot">
        <span>Forgot password ?</span>
      </Link>
    </p>
  )
}

export default function ({ history }) {
  return (
    <section className="hero is-fullheight is-primary register-page">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-two-thirds">
            </div>
            <div className="column is-one-third">
              <Switch>
                <Route exact path="/auth">
                  <Fragment>
                    <SocialHeader/>
                    <br/>
                    <br/>
                    <h4 className="subtitle is-5 has-text-centered">or</h4>
                    <AuthNavigation/>
                    <br/>
                    <ReduxRegistrationForm onSubmit={(regReq) => auth.signUp(regReq, history)}/>
                    <ForgotPasswordLink/>
                  </Fragment>
                </Route>
                <Route path="/auth/login">
                  <Fragment>
                    <SocialHeader/>
                    <br/>
                    <br/>
                    <h4 className="subtitle is-5 has-text-centered">or</h4>
                    <AuthNavigation/>
                    <br/>
                    <ReduxLoginForm onSubmit={(logInReq) => auth.login(logInReq, history)}/>
                    <ForgotPasswordLink/>
                  </Fragment>
                </Route>
                <Route exact path="/auth/facebook">
                  <FacebookAuthPage history={history}/>
                </Route>
                <Route exact path="/auth/google">
                  <GoogleAuthPage history={history}/>
                </Route>
                <Route exact path="/auth/forgot">
                  <ReduxForgotForm onSubmit={(forgotReq) => auth.forgot(forgotReq).then(res => history.push("/auth/forgot/success"))}/>
                </Route>
                <Route exact path="/auth/forgot/success">
                  <h2 className="title">Check your email :)</h2>
                </Route>
                <Route path="/auth/reset/:token" children={({ match: { params: { token }} }) => (
                  <ReduxResetForm onSubmit={(restoreReq) => auth.reset(restoreReq, token, history)}/>
                 )}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
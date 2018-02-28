import React from "react";
import { Field, Form, reduxForm } from "redux-form";
import AuthMenu from "./AuthMenu";
import { connect } from "react-redux";
import { Link, Route, Switch } from 'react-router-dom';
import auth from "reducers/util/auth";
import { renderField, required, LoadingButton } from "components/form/form.utils";
import { IconWithText } from "components/Icon";
import FacebookAuthPage from "./FacebookAuthPage";
import GoogleAuthPage from "./GoogleAuthPage";

let ResetForm = ({ handleSubmit, submitting }) => {
  return (
    <Form onSubmit={handleSubmit} className="is-primary">
      <Field name="password" component={renderField} type="password" placeholder="New Password"
             validate={[required]} disabled={submitting}/>

      <div className="field has-addons">
        <LoadingButton submitting={submitting}>
          <IconWithText className="fa fa-refresh">Restore</IconWithText>
        </LoadingButton>
      </div>
    </Form>
  );
};

let ReduxResetForm = reduxForm({ form: 'reset' })(ResetForm);

let ForgotForm = ({ handleSubmit, submitting }) => {
  return (
    <Form onSubmit={handleSubmit} className="is-primary">
      <Field name="email" component={renderField} type="email" placeholder="Email"
             validate={[required]} disabled={submitting}/>

      <div className="field">
        <LoadingButton submitting={submitting}>
          <IconWithText className="fa fa-send">Send a password restore link</IconWithText>
        </LoadingButton>
      </div>
    </Form>
  );
};

let ReduxForgotForm = reduxForm({ form: 'forgot' })(ForgotForm);

let LoginForm = ({ handleSubmit, submitting }) => {

  return (
    <Form onSubmit={handleSubmit} className="is-primary">
      <Field name="email" component={renderField} type="email" placeholder="Email"
             validate={[required]} disabled={submitting}/>
      <Field name="password" component={renderField} type="password" placeholder="Password"
             validate={[required]} disabled={submitting}/>

      <div className="field has-addons">
        <LoadingButton submitting={submitting}>
          <IconWithText className="fa fa-sign-in">Log in</IconWithText>
        </LoadingButton>
      </div>
    </Form>
  );
};

let ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm);

let RegisterForm = ({ handleSubmit, submitting }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Field name="firstName" component={renderField} type="string" placeholder="First name"
             validate={[required]}/>
      <Field name="lastName" component={renderField} type="string" placeholder="Last name"
             validate={[required]}/>
      <Field name="email" component={renderField} type="email" placeholder="Email"
             validate={[required]}/>
      <Field name="password" component={renderField} type="password" placeholder="Password"
             validate={[required]}/>
      <div className="field has-addons">
        <LoadingButton submitting={submitting}>
          <IconWithText className="fa fa-registered">Register</IconWithText>
        </LoadingButton>
      </div>
    </Form>
  );
};

let ReduxRegistrationForm = reduxForm({ form: 'register' })(RegisterForm);

function SocialHeader({ facebook, google }) {
  return (
    <div className="has-text-centered">
      <div className="field has-addons">
        <p className="control">
          <a className="button is-primary is-inverted is-outlined" href={facebook}>
            <IconWithText className="fa fa-facebook-official">Connect with FB</IconWithText>
          </a>
        </p>
        <p className="control">
          <a className="button is-primary is-inverted is-outlined" href={google}>
            <IconWithText className="fa fa-google">Connect with Google</IconWithText>
          </a>
        </p>
      </div>
      <br/>
      <br/>
      <h4 className="subtitle is-5">or</h4>
      <AuthMenu/>
      <br/>
    </div>
  );
}

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
                  <div>
                    <SocialHeader/>
                    <ReduxRegistrationForm onSubmit={(regReq) => auth.signUp(regReq, history)}/>
                    <ForgotPasswordLink/>
                  </div>
                </Route>
                <Route path="/auth/login">
                  <div>
                    <SocialHeader/>
                    <ReduxLoginForm onSubmit={(logInReq) => auth.login(logInReq, history)}/>
                    <ForgotPasswordLink/>
                  </div>
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
import React, { Fragment } from "react";
import AuthNavigation from "./AuthNavigation";
import { connect } from "react-redux";
import { Link, Route, Switch } from 'react-router-dom';
import { FacebookIcon } from "components/Icon";

import RegistrationForm from "./RegistrationForm";
import ResetForm from "./ResetForm";
import ForgotForm from "./ForgotForm";
import LoginForm from "./LoginForm";
import SocialAuthPage from "./SocialAuthPage";

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
                    <RegistrationForm/>
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
                    <LoginForm />
                    <ForgotPasswordLink/>
                  </Fragment>
                </Route>
                <Route exact path="/auth/forgot">
                  <ForgotForm/>
                </Route>
                <Route exact path="/auth/forgot/success">
                  <h2 className="title">Check your email :)</h2>
                </Route>
                <Route path="/auth/reset/:token" children={({ match: { params: { token }} }) => (
                  <ResetForm token={token}/>
                 )}
                />
                <Route exact path="/auth/google">
                  <SocialAuthPage provider="google"/>
                </Route>
                <Route exact path="/auth/facebook">
                  <SocialAuthPage provider="facebook"/>
                </Route>
                <Route exact path="/auth/tumblr">
                  <SocialAuthPage provider="tumblr"/>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import 'whatwg-fetch';
import { SubmissionError } from "redux-form";
import { dispatchPromise, event } from "reducers/util/promiseStates";
import tokenStore from "reducers/util/JWTTokenStore";
import { goToContributions, goToForgotAuth, goToProjectInstallation } from "reducers/navigation.actions";
import { getContributions } from "reducers/statistic.actions";
import { getUser } from "reducers/user.actions";
import { getOwnedProjects } from "reducers/project.actions";

export const AUTHENTICATION = event("AUTHENTICATION");

function handleFetchResponse(res) {
  if (res.status === 400) {
    return res.json().then(({ field, error }) => {
      throw new SubmissionError({ [field]: error })
    });
  }
  return res.json();
}

function withPostOptions(form) {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: 'same-origin',
    body: JSON.stringify(form)
  };
}

export function decodeToken(token) {
  let base64Url = token.split('.')[1];

  let base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}

export const initializeOnAuth = (dispatch) => {
  dispatch(getContributions("my"));
  dispatch(getUser("my"));
  dispatch(getOwnedProjects())
};

const doAuth = (req, dispatch, navigateAfter = goToContributions) => {
  let p = fetch(req)
    .then(handleFetchResponse)
    .then(authRes => {
      let details = decodeToken(authRes.token);
      let auth = { ... authRes, details };
      tokenStore.setToken(auth);
      return auth;
    });

  return dispatchPromise(p, AUTHENTICATION, dispatch).then(() => {
    dispatch(initializeOnAuth);
    dispatch(navigateAfter)
  });
};

export const authWithSocial = (provider) => (dispatch) => {
  let url = `/api/v1/auth/social/${provider}${location.search}`;
  return doAuth(new Request(url, { credentials: 'same-origin' }), dispatch, provider !== "facebook" ? goToProjectInstallation : goToContributions);
};

export const signUp = (registrationForm) => (dispatch) => {
  let url = `/api/v1/auth/register`;
  let options = withPostOptions(registrationForm);
  return doAuth(new Request(url, options), dispatch);
};

export const login = (loginForm) => (dispatch) => {
  let url = `/api/v1/auth/logIn`;
  let options = withPostOptions(loginForm);
  return doAuth(new Request(url, options), dispatch);
};

export const forgot = (forgotForm) => (dispatch) => {
  let url = `/api/v1/auth/password/forgot`;
  let options = withPostOptions(forgotForm);
  return fetch(new Request(url, options))
    .then(handleFetchResponse)
    .then(() => dispatch(goToForgotAuth));
};

export const reset = (resetForm, token) => (dispatch) => {
  let url = `/api/v1/auth/password/reset/${token}`;
  let options = withPostOptions(resetForm);
  return doAuth(new Request(url, options), dispatch);
};
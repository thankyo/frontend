import 'whatwg-fetch';
import { SubmissionError } from "redux-form";
import { dispatchPromise, event } from "reducers/util/promiseStates";
import tokenStore from "reducers/util/JWTTokenStore";
import { push } from "react-router-redux/actions"

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

const doAuth = (req, dispatch) => {
  let p = fetch(req).then((res) => handleFetchResponse(res))
    .then(authRes => {
      tokenStore.setToken(authRes.token);
      dispatch(push("/contribution/my"));
    });

  return dispatchPromise(p, AUTHENTICATION, dispatch);
};

export const authWithFacebook = () => (dispatch) => {
  let url = `/api/v1/auth/social/facebook${location.search}`;
  return doAuth(new Request(url, { credentials: 'same-origin' }), dispatch);
};

export const authWithGoogle = () => (dispatch) => {
  let url = `/api/v1/auth/social/google${location.search}`;
  return doAuth(new Request(url, { credentials: 'same-origin' }), dispatch);
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

export const forgot = (forgotForm) => {
  let url = `/api/v1/auth/password/forgot`;
  let options = withPostOptions(forgotForm);
  return fetch(new Request(url, options)).then(handleFetchResponse);
};

export const reset = (resetForm, token) => (dispatch) => {
  let url = `/api/v1/auth/password/reset/${token}`;
  let options = withPostOptions(resetForm);
  return doAuth(new Request(url, options), dispatch);
};

export const restoreAuthentication = (dispatch) => {
  let token = tokenStore.getToken();
  if (token !== undefined && token !== null) {
    // TODO This is here in order to update Raven
    tokenStore.setToken(token);
    return true;
  }
  return false;
};

export const logout = (dispatch) => {
  tokenStore.removeToken();
  window.location = '/api/v1/auth/logout';
};
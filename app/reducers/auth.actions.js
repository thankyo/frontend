import 'whatwg-fetch';
import authService from '../service/auth';
import { typeEvent, dispatchPromise } from '../service/promiseStates';
import { Link, browserHistory } from 'react-router';

export const LOGOUT = "LOGOUT";

export function logout() {
    return (dispatch) => {
        dispatch(typeEvent(LOGOUT));
    };
}


export const FACEBOOK_LOGIN = "FACEBOOK_LOGIN";

function authWithFacebook(dispatch, search) {
  if (!authService.isAuthenticated()) {
    let url = `/api/v1/auth/authenticate/facebook${search}`;
    let p = fetch(new Request(url)).then((res) => res.json());
    return dispatchPromise(p, FACEBOOK_LOGIN, dispatch)
  } else {
    return Promise.resolve();
  }
}

export function authFacebook(search) {
    return (dispatch) => {
        authWithFacebook(dispatch, search).
        then(() => browserHistory.push("/supporter/my"));
    }
}
export const LOGIN_REQUESTED = "LOGIN_REQUESTED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const CHECK_AUTH = "CHECK_AUTH";

export const LOGOUT = "LOGOUT";

import { browserHistory } from 'react-router';

function loginRequested(provider) {
    return {
        type: LOGIN_REQUESTED,
        payload: {
            provider
        }
    }
}

function loginError(error) {
    return {
        type: LOGIN_ERROR,
        payload: {
            error
        }
    }
}

function loginSuccess(token) {
    return {
        type: LOGIN_SUCCESS,
        payload: {
            token
        }
    }
}

export function checkAuth() {
    return {
        type: CHECK_AUTH
    };
}

export function logout() {
    return {
        type: LOGOUT
    }
}

export function login(provider) {
    return (dispatch) => {
        dispatch(loginRequested(provider));
        let win = window.open(`/api/v1/auth/authenticate/${provider}`);
        win.onload = function(event) {
            try {
                let token = event.currentTarget.document.documentElement.innerText;
                dispatch(loginSuccess(token));
                browserHistory.push("/dashboard");
                event.currentTarget.close();
            } catch (error) {
                dispatch(loginError(error));
            }
        };
    }
}
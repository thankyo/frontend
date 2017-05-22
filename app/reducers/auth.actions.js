import { HOME } from "service/routes";

export const LOGIN_REQUESTED = "LOGIN_REQUESTED";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const LOGOUT = "LOGOUT";

import { browserHistory } from 'react-router';

function loginRequested(payload) {
    return {
        type: LOGIN_REQUESTED,
        payload
    }
}

function loginSuccess(payload) {
    return {
        type: LOGIN_SUCCESS,
        payload
    }
}

function loginFailed(payload) {
    return {
        type: LOGIN_FAILED,
        payload
    }
}

function logoutEvent() {
    return {
        type: LOGOUT
    };
}

export function logout() {
    return (dispatch) => {
        dispatch(logoutEvent());
        browserHistory.push("/");
    };
}

function updateAuth(win, dispatch) {
    try {
        let token = win.document.documentElement.innerText;
        win.close();
        dispatch(loginSuccess({ token }));
        browserHistory.push(HOME);
    } catch (error) {
        dispatch(loginFailed({ error }));
    }
}

function waitForAuth(win, dispatch) {
    let timer = setInterval(checkAuthenticated, 500);

    function checkAuthenticated() {
        let ur = win.location.href;
        if (ur.indexOf('/auth/authenticate/facebook') != -1 && win.document.documentElement.innerText.length > 0) {
            clearInterval(timer);
            updateAuth(win, dispatch);
        }
    }
}

export function login(provider) {
    return (dispatch) => {
        dispatch(loginRequested({ provider }));
        let win = window.open(`/api/v1/auth/authenticate/${provider}`);
        waitForAuth(win, dispatch);
    }
}
import { requested, success, failed } from "./state";
import { HOME } from "../service/routes";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

import { browserHistory } from 'react-router';

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
        dispatch(success(LOGIN, { token }));
        browserHistory.push(HOME);
    } catch (error) {
        dispatch(failed(LOGIN, { error }));
    }
}

function waitForAuth(win, dispatch) {
    let timer = setInterval(checkAuthenticated, 500);

    function checkAuthenticated() {
        var ur = win.location.href;
        if (ur.indexOf('/auth/authenticate/facebook') != -1 && win.document.documentElement.innerText.length > 0) {
            clearInterval(timer);
            updateAuth(win, dispatch);
        }
    }
}

export function login(provider) {
    return (dispatch) => {
        dispatch(requested(LOGIN, { provider }));
        let win = window.open(`/api/v1/auth/authenticate/${provider}`);
        waitForAuth(win, dispatch);
    }
}
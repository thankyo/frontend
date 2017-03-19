import { requested, success, failed} from "./state";

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

export function login(provider) {
    return (dispatch) => {
        dispatch(requested(LOGIN, { provider }));
        let win = window.open(`/api/v1/auth/authenticate/${provider}`);
        win.onload = function(event) {
            try {
                let token = event.currentTarget.document.documentElement.innerText;
                dispatch(success(LOGIN, { token }));
                browserHistory.push("/dashboard");
                event.currentTarget.close();
            } catch (error) {
                dispatch(failed(LOGIN, { error }));
            }
        };
    }
}
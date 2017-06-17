import 'whatwg-fetch';
import authService from '../service/auth';
import { typeEvent, dispatchPromise } from '../service/promiseStates';

export const LOGOUT = "LOGOUT";

export function logout() {
    return (dispatch) => {
        dispatch(typeEvent(LOGOUT));
    };
}


export const FACEBOOK_LOGIN = "FACEBOOK_LOGIN";

export function authFacebook(search) {
    return (dispatch) => {
        if (!authService.isAuthenticated()) {
            let url = `/api/v1/auth/authenticate/facebook${search}`;
            let p = fetch(new Request(url)).then((res) => res.json());
            dispatchPromise(p, FACEBOOK_LOGIN, dispatch);
        }
    }
}
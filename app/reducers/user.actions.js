import authService from '../service/auth';

import { requested, success, failed } from "./state";

export const USER_FETCH   = "USER_FETCH";

export function fetch(id) {
    return (dispatch) => {
        dispatch(requested(USER_FETCH, id));
        authService.signAndFetch(new Request(`/api/v1/user/${id}`), dispatch).
        then(user => {
            dispatch(success(USER_FETCH, user));
            dispatch(success(USER_FETCH, Object.assign({}, user, {id})));
        }).catch(error => dispatch(failed(USER_FETCH, error)))
    }
}
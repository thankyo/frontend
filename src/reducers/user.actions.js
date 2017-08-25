import authService from './util/auth';

export const USER_REQUESTED   = "USER_REQUESTED";
export const USER_SUCCESS     = "USER_SUCCESS";
export const USER_FAILED      = "USER_FAILED";

function userRequested(payload) {
    return {
        type: USER_REQUESTED,
        payload
    }
}

function userSuccess(payload) {
    return {
        type: USER_SUCCESS,
        payload
    }
}

function userFailed(payload) {
    return {
        type: USER_FAILED,
        payload
    }
}

export function fetch(id) {
    return (dispatch) => {
        dispatch(userRequested(id));
        authService.signAndFetch(new Request(`/api/v1/user/profile/${id}`), dispatch).
        then(user => {
            dispatch(userSuccess(user));
            dispatch(userSuccess(Object.assign({}, user, {id})));
        }).catch(error => dispatch(userFailed(error)))
    }
}
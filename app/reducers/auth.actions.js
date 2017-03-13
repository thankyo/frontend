export const LOGIN_REQUESTED = "LOGIN_REQUESTED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export function loginRequested(provider) {
    return {
        type: LOGIN_REQUESTED,
        payload: {
            provider
        }
    }
}

export function loginError(error) {
    return {
        type: LOGIN_ERROR,
        payload: {
            error
        }
    }
}

export function loginSuccess(token) {
    return {
        type: LOGIN_SUCCESS,
        payload: {
            token
        }
    }
}

function login(provider) {
    return (dispatch) => {
        dispatch(loginRequested(provider));
        fetch(`/api/v1/auth/authenticate/${provider}`).then(
            (token) => dispatch(loginSuccess(token)),
            (error) => dispatch(loginError(error))
        )
    }
}
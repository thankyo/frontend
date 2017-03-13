export const USER_FETCH_REQUESTED   = "USER_FETCH_REQUESTED";
export const USER_FETCH_SUCCESS     = "USER_FETCH_SUCCESS";
export const USER_FETCH_FAILED      = "USER_FETCH_FAILED";

function fetchRequested(id) {
    return {
        type: USER_FETCH_REQUESTED,
        payload: {
            id
        }
    }
};

function fetchSuccess(payload) {
    return {
        type: USER_FETCH_SUCCESS,
        payload
    }
}

function fetchFailed(payload) {
    return {
        type: USER_FETCH_FAILED,
        payload
    }
}

export function fetchUser(id) {
    return (dispatch) => {
        dispatch(fetchRequested(id));
        fetch(`/api/v1/user/${id}`).then(
            user => dispatch(fetchSuccess(user)),
            error => dispatch(fetchFailed(error))
        )
    }
}
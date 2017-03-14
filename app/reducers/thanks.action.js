import authService from '../service/auth';

export const THANK_FETCH_REQUESTED   = "THANK_FETCH_REQUESTED";
export const THANK_FETCH_SUCCESS     = "THANK_FETCH_SUCCESS";
export const THANK_FETCH_FAILED      = "THANK_FETCH_FAILED";

function fetchRequested(id) {
    return {
        type: THANK_FETCH_REQUESTED,
        payload: {
            id
        }
    }
};

function fetchSuccess(payload) {
    return {
        type: THANK_FETCH_SUCCESS,
        payload
    }
}

function fetchFailed(id, thanks) {
    return {
        type: THANK_FETCH_FAILED,
        payload: {
            userId: id,
            thanks
        }
    }
}

export function fetchThank(id) {
    return (dispatch) => {
        dispatch(fetchRequested(id));
        authService.fetch(new Request(`/api/v1/thank/user/${id}`)).then(
            user => {
                dispatch(fetchSuccess(id, thanks));
                dispatch(fetchSuccess(id, thanks));
            },
            error => dispatch(fetchFailed(error))
        )
    }
}
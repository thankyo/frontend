import authService from '../service/auth';

export const PAYMENT_FETCH_REQUESTED   = "PAYMENT_FETCH_REQUESTED";
export const PAYMENT_FETCH_SUCCESS     = "PAYMENT_FETCH_SUCCESS";
export const PAYMENT_FETCH_FAILED      = "PAYMENT_FETCH_FAILED";

function fetchRequested(id) {
    return {
        type: PAYMENT_FETCH_REQUESTED,
        payload: {
            id
        }
    }
};

function fetchSuccess(payload) {
    return {
        type: PAYMENT_FETCH_SUCCESS,
        payload
    }
}

function fetchFailed(id, thanks) {
    return {
        type: PAYMENT_FETCH_FAILED,
        payload: {
            userId: id,
            thanks
        }
    }
}

export function fetchPayments(id) {
    return (dispatch) => {
        dispatch(fetchRequested(id));
        authService.fetch(new Request(`/api/v1/thank/user/${id}`)).then(
            payments => {
                dispatch(fetchSuccess(id, payments));
                dispatch(fetchSuccess(id, payments));
            },
            error => dispatch(fetchFailed(id, error))
        )
    }
}
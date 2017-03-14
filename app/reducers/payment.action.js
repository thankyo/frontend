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

function fetchFailed(payload) {
    return {
        type: PAYMENT_FETCH_FAILED,
        payload
    }
}

export function fetchPayments(id) {
    return (dispatch) => {
        dispatch(fetchRequested(id));
        authService.signAndStream(`/api/v1/transaction/user/${id}`, dispatch, (payment) => {
            dispatch(fetchSuccess(payment));
            if (id === "me") dispatch(fetchSuccess(Object.assign({}, payment, { "user": "me"})))
        })
    }
}
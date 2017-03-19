import authService from '../service/auth';

export const THANK_TRANSACTION_FETCH_REQUESTED   = "THANK_TRANSACTION_FETCH_REQUESTED";
export const THANK_TRANSACTION_FETCH_SUCCESS     = "THANK_TRANSACTION_FETCH_SUCCESS";
export const THANK_TRANSACTION_FETCH_FAILED      = "THANK_TRANSACTION_FETCH_FAILED";

function fetchTransactionRequested(id) {
    return {
        type: THANK_TRANSACTION_FETCH_REQUESTED,
        payload: {
            id
        }
    }
};

function fetchTransactionSuccess(payload) {
    return {
        type: THANK_TRANSACTION_FETCH_SUCCESS,
        payload
    }
}

function fetchTransactionFailed(payload) {
    return {
        type: THANK_TRANSACTION_FETCH_FAILED,
        payload
    }
}

export function fetchThankTransactions(id) {
    return (dispatch) => {
        dispatch(fetchTransactionRequested(id));
        authService.signAndStream(`/api/v1/transaction/user/${id}`, dispatch, (payment) => {
            dispatch(fetchTransactionSuccess(payment));
            if (id === "me") dispatch(fetchTransactionSuccess(Object.assign({}, payment, { "user": "me"})))
        })
    }
}
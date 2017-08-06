import authService from '../util/auth';

export const THANK_TRANSACTION_REQUESTED   = "THANK_TRANSACTION_REQUESTED";
export const THANK_TRANSACTION_SUCCESS   = "THANK_TRANSACTION_SUCCESS";

function transactionRequested(payload) {
    return {
        type: THANK_TRANSACTION_REQUESTED,
        payload
    }
}

function transactionSuccess(payload) {
    return {
        type: THANK_TRANSACTION_SUCCESS,
        payload
    }
}

export function listTransactions(id) {
    return (dispatch) => {
        dispatch(transactionRequested({ id }));
        authService.signAndStream(`/api/v1/transaction/user/${id}`, dispatch, (payment) => {
            dispatch(transactionSuccess(THANK_TRANSACTION_REQUESTED, payment));
            if (id === "my") dispatch(transactionSuccess(Object.assign({}, payment, { "user": "my"})))
        })
    }
}
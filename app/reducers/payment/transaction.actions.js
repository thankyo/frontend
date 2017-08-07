import authService from '../util/auth';

export const PAYMENT_TRANSACTION_REQUESTED   = "PAYMENT_TRANSACTION_REQUESTED";
export const PAYMENT_TRANSACTION_SUCCESS = "PAYMENT_TRANSACTION_SUCCESS";

function transactionRequested(payload){
    return {
        type: PAYMENT_TRANSACTION_REQUESTED,
        payload
    }
}

function transactionSuccess(payload) {
    return {
        type: PAYMENT_TRANSACTION_SUCCESS,
        payload
    }
}

export function listTransactions(id) {
    return (dispatch) => {
        dispatch(transactionRequested({ id }));
        authService.signAndStream(`/api/v1/payment/pending/${id}`, dispatch, (payment) => {
            dispatch(transactionSuccess(payment));
            if (id === "my") dispatch(transactionSuccess(Object.assign({}, payment, { "user": "my"})))
        })
    }
}
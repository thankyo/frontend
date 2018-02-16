import authService from '../util/auth';

export const THANK_TRANSACTION_REQUESTED   = "THANK_TRANSACTION_REQUESTED";
export const THANK_TRANSACTION_SUCCESS   = "THANK_TRANSACTION_SUCCESS";

function transactionRequested(payload) {
    return {
        type: THANK_TRANSACTION_REQUESTED,
        payload
    }
}

function transactionSuccess(user, payload) {
    return {
        type: THANK_TRANSACTION_SUCCESS,
        user,
        payload
    }
}

export function listTransactions(id) {
    return (dispatch) => {
        dispatch(transactionRequested({ id }));
        authService.signAndFetch(new Request(`/api/v1/payment/${id}/pending`)).
            then((payment) => {
                dispatch(transactionSuccess(id, payment));
                if (id === "my") {
                    dispatch(transactionSuccess("my", payment));
                }
            })
    }
}
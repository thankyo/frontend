import authService from '../../service/auth';

import { requested, success, failed } from "../state";

export const PAYMENT_TRANSACTION_FETCH   = "PAYMENT_TRANSACTION_FETCH";

export function listTransactions(id) {
    return (dispatch) => {
        dispatch(requested(PAYMENT_TRANSACTION_FETCH, { id }));
        authService.signAndStream(`/api/v1/payment/transaction/user/${id}`, dispatch, (payment) => {
            dispatch(success(PAYMENT_TRANSACTION_FETCH, payment));
            if (id === "my") dispatch(success(PAYMENT_TRANSACTION_FETCH, Object.assign({}, payment, { "user": "my"})))
        })
    }
}
import authService from '../service/auth';

import { requested, success, failed } from "./state";

export const THANK_TRANSACTION_FETCH   = "THANK_TRANSACTION_FETCH";

export function fetch(id) {
    return (dispatch) => {
        dispatch(requested(THANK_TRANSACTION_FETCH, { id }));
        authService.signAndStream(`/api/v1/transaction/user/${id}`, dispatch, (payment) => {
            dispatch(success(THANK_TRANSACTION_FETCH, payment));
            if (id === "my") dispatch(success(THANK_TRANSACTION_FETCH, Object.assign({}, payment, { "user": "me"})))
        })
    }
}
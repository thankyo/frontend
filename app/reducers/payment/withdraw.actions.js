import authService from '../../service/auth';

export const WITHDRAW_REQUESTED = "WITHDRAW_REQUESTED";
export const WITHDRAW_SUCCESS = "WITHDRAW_SUCCESS";
export const WITHDRAW_ERROR = "WITHDRAW_ERROR";

function withdrawRequested(payload) {
    return {
        type: WITHDRAW_REQUESTED,
        payload
    }
}

function withdrawError(error) {
    return {
        type: WITHDRAW_ERROR,
        payload: { error }
    }
}

function withdrawSuccess(payload) {
    return {
        type: WITHDRAW_SUCCESS,
        payload
    }
}

export function withdraw(payload) {
    return (dispatch) => {
        dispatch(withdrawRequested(payload));
        let wReq = new Request(`/api/v1/payment/transaction/withdraw`,
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload),
            });
        authService.signAndFetch(wReq, dispatch).
        then(payment => {
            dispatch(withdrawSuccess(payment))
        }).catch((error) => dispatch(withdrawError(error)))
    }
}


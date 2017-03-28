import authService from '../../service/auth';

export const WITHDRAW_REQUESTED = "WITHDRAW_REQUESTED";
export const WITHDRAW_SUCCESS = "WITHDRAW_SUCCESS";
export const WITHDRAW_ERROR = "WITHDRAW_ERROR";

function withdrawRequested(amount) {
    return {
        type: WITHDRAW_REQUESTED,
        payload: {
            amount
        }
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

export function withdraw(amount) {
    return (dispatch) => {
        dispatch(withdrawRequested(amount));
        let wReq = new Request(`/api/v1/payment/withdraw`, { method: "POST" })
        authService.signAndFetch(wReq, dispatch).
        then(payment => dispatch(withdrawSuccess(payment))).
        catch((error) => dispatch(withdrawError(error)))
    }
}


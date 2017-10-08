import authService from '../util/auth';
import {reset} from 'redux-form';

export const THANK_REQUESTED = "THANK_REQUESTED";
export const THANK_FAILED = "THANK_FAILED";
export const THANK_SUCCESS = "THANK_SUCCESS";

function thankRequested(payload) {
    return {
        type: THANK_REQUESTED,
        payload
    }
}

function thankSuccess(thank) {
    return {
        type: THANK_SUCCESS,
        payload: { thank }
    }
}

function thankFailed(error) {
    return {
        type: THANK_FAILED,
        payload: { error }
    }
}

export function thank(payload) {
    return (dispatch) => {
        let normUrl = payload.url.trim();
        if (normUrl.length === 0)
            return;
        dispatch(thankRequested(payload));
        authService.
            signAndFetch(new Request(`/api/v1/thank/http/${normUrl}`, { method: "PUT" }), dispatch).
            then(thank => {
                dispatch(thankSuccess(thank))
                dispatch(reset('thankUrl'))
            }).catch((error) => dispatch(thankFailed(error)))
        
    }
}
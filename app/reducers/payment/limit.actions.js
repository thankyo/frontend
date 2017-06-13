import authService from 'service/auth';
import {dispatchPromise} from 'service/promiseStates';

export const SET_LIMIT = "SET_LIMIT";
export const INC_LIMIT = "INC_LIMIT";
export const DEC_LIMIT = "DEC_LIMIT";
export const GET_LIMIT = "GET_LIMIT";

export function increase() {
    return (dispatch) => {
        dispatch({ type: INC_LIMIT })
    }
}

export function decrease() {
    return (dispatch) => {
        dispatch({ type: DEC_LIMIT })
    }
}

export function getLimit() {
    return (dispatch) => {
        let req = new Request(
            "/api/v1/payment/limit/month/my",
            {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
        let p = authService.signAndFetch(req, dispatch);
        dispatchPromise(p, GET_LIMIT, dispatch)
    }
}

export function setLimit(limit) {
    return (dispatch) => {
        let req = new Request(
            "/api/v1/payment/limit/month/my",
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(limit)
            });
        let p = authService.signAndFetch(req, dispatch);
        dispatchPromise(p, SET_LIMIT, dispatch)
    }
}
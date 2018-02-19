import authService from '../../util/auth';
import { dispatchPromise } from '../../util/promiseStates';

export const SET_LIMIT = "SET_LIMIT";
export const GET_LIMIT = "GET_LIMIT";

export function getLimit() {
  return (dispatch) => {
    let req = new Request("/api/v1/payment/my/charge/limit");
    let p = authService.signAndFetch(req);
    return dispatchPromise(p, GET_LIMIT, dispatch)
  }
}

export function increase(limit) {
  return (dispatch) => {
    let newLimit = Object.assign({}, limit, { amount: limit.amount + 5 });
    dispatch({ type: "SET_LIMIT", payload: newLimit });
    setLimit(newLimit)(dispatch);
  }
}

export function decrease(limit) {
  return (dispatch) => {
    let newLimit = Object.assign({}, limit, { amount: limit.amount - 5 });
    if (newLimit.amount === 0)
      return;
    dispatch({ type: "SET_LIMIT", payload: newLimit });
    setLimit(newLimit)(dispatch);
  }
}

export function setLimit(limit) {
  return (dispatch) => {
    let req = new Request("/api/v1/payment/my/charge/limit",
      {
        method: "POST",
        body: JSON.stringify(limit)
      });
    let p = authService.signAndFetch(req);
    return dispatchPromise(p, SET_LIMIT, dispatch)
  }
}
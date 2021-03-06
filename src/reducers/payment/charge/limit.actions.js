import authService from '../../util/auth';
import { dispatchPromise, event } from '../../util/promiseStates';

export const CHARGE_LIMIT_SET = event("CHARGE_LIMIT_SET");
export const CHARGE_LIMIT_GET = event("CHARGE_LIMIT_GET");

export const getLimit = CHARGE_LIMIT_GET.getMy("/api/v1/payment/$id/charge/limit");

export function increase(limit) {
  return (dispatch) => {
    let newLimit = Object.assign({}, limit, { amount: limit.amount + 5 });
    dispatch({ type: "CHARGE_LIMIT_SET", payload: newLimit });
    setLimit(newLimit)(dispatch);
  }
}

export function decrease(limit) {
  return (dispatch) => {
    let newLimit = Object.assign({}, limit, { amount: limit.amount - 5 });
    if (newLimit.amount === 0)
      return;
    dispatch({ type: "CHARGE_LIMIT_SET", payload: newLimit });
    setLimit(newLimit)(dispatch);
  }
}

export function setLimit(limit) {
  return (dispatch) => {
    let p = authService.post("/api/v1/payment/my/charge/limit", limit);
    return dispatchPromise(p, CHARGE_LIMIT_SET, dispatch)
  }
}
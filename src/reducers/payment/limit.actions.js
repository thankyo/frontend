import authService from '../util/auth';
import { dispatchPromise } from '../util/promiseStates';

export const SET_LIMIT = "SET_LIMIT";
export const GET_LIMIT = "GET_LIMIT";

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
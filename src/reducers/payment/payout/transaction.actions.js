import authService from 'reducers/util/auth';
import { dispatchPromise, event } from "reducers/util/promiseStates";
import { handleCSVResponce } from "reducers/util/http";

export const GET_PENDING_PAYOUTS = event("GET_PENDING_PAYOUTS");
export const GET_PENDING_PAYOUTS_CSV = event("GET_PENDING_PAYOUTS_CSV");

export const GET_PAYOUTS = event("GET_PAYOUTS");
export const GET_PAYOUTS_CSV = event("GET_PAYOUTS_CSV");

export function getPendingPayouts(id) {
  return (dispatch) => {
    let req = new Request(`/api/v1/payment/${id}/payout/pending`);
    let p = authService.signAndFetch(req).then(transactions => ({ id, transactions }));
    return dispatchPromise(p, GET_PENDING_PAYOUTS, dispatch);
  }
}

export function getPendingPayoutsCsv(id) {
  return (dispatch) => {
    let req = new Request(`/api/v1/payment/${id}/payout/pending/csv`);
    let p = authService.signAndFetch(req, false).then(handleCSVResponce("pending_payout.csv"));
    return dispatchPromise(p, GET_PENDING_PAYOUTS_CSV, dispatch);
  }
}

export function getPayouts(id) {
  return (dispatch) => {
    let req = new Request(`/api/v1/payment/${id}/payout`);
    let p = authService.signAndFetch(req).then(payouts => ({ id, payouts }));
    dispatchPromise(p, GET_PAYOUTS, dispatch)
  }
}

export function getPayoutsCSV(id) {
  return (dispatch) => {
    let req = new Request(`/api/v1/payment/${id}/payout/csv`);
    let p = authService.signAndFetch(req, false).then(handleCSVResponce("payouts.csv"));
    return dispatchPromise(p, GET_PAYOUTS_CSV, dispatch)
  }
}
import authService from 'reducers/util/auth';
import { dispatchPromise, event } from "reducers/util/promiseStates";

export const GET_PENDING_PAYOUTS = event("GET_PENDING_PAYOUTS");
export const GET_PENDING_PAYOUTS_CSV = event("GET_PENDING_PAYOUTS_CSV");

export const GET_PAYOUTS = event("GET_PAYOUTS");
export const GET_PAYOUTS_CSV = event("GET_PAYOUTS_CSV");

export function getPendingPayouts(id) {
  return (dispatch) => {
    let p = authService.get(`/api/v1/payment/${id}/payout/pending`).then(transactions => ({ id, transactions }));
    return dispatchPromise(p, GET_PENDING_PAYOUTS, dispatch);
  }
}

export function getPendingPayoutsCsv(id) {
  return (dispatch) => {
    let p = authService.getCSV(`/api/v1/payment/${id}/payout/pending/csv`, "pending_payout.csv");
    return dispatchPromise(p, GET_PENDING_PAYOUTS_CSV, dispatch);
  }
}

export function getPayouts(id) {
  return (dispatch) => {
    let p = authService.get(`/api/v1/payment/${id}/payout`).then(payouts => ({ id, payouts }));
    dispatchPromise(p, GET_PAYOUTS, dispatch)
  }
}

export function getPayoutsCSV(id) {
  return (dispatch) => {
    let p = authService.getCSV(`/api/v1/payment/${id}/payout/csv`, "payouts.csv");
    return dispatchPromise(p, GET_PAYOUTS_CSV, dispatch)
  }
}
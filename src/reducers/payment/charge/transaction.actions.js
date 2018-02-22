import authService from 'reducers/util/auth';

import { dispatchPromise, event } from "reducers/util/promiseStates";
import { handleCSVResponce } from "reducers/util/http";

export const GET_PENDING_CHARGES = event("GET_PENDING_CHARGES");
export const GET_PENDING_CHARGES_CSV = event("GET_PENDING_CHARGES_CSV");

export const GET_CHARGES = event("GET_CHARGES");
export const GET_CHARGES_CSV = event("GET_CHARGES_CSV");

export function getPendingCharges(id) {
  return (dispatch) => {
    let req = new Request(`/api/v1/payment/${id}/charge/pending`);
    let p = authService.signAndFetch(req).then(transactions => ({ id, transactions }));
    return dispatchPromise(p, GET_PENDING_CHARGES, dispatch);
  }
}

export function getPendingChargesCsv(id) {
  return (dispatch) => {
    let req = new Request(`/api/v1/payment/${id}/charge/pending/csv`);
    let p = authService.signAndFetch(req, false).then(handleCSVResponce("pending_charges.csv"));
    return dispatchPromise(p, GET_PENDING_CHARGES_CSV, dispatch);
  }
}

export function getCharges(id) {
  return (dispatch) => {
    let req = new Request(`/api/v1/payment/${id}/charge`);
    let p = authService.signAndFetch(req).then(charges => ({ id, charges }));
    dispatchPromise(p, GET_CHARGES, dispatch);
  }
}

export function getChargesCSV(id) {
  return (dispatch) => {
    let req = new Request(`/api/v1/payment/${id}/charge/csv`);
    let p = authService.signAndFetch(req, false).then(handleCSVResponce("charges.csv"));
    return dispatchPromise(p, GET_CHARGES_CSV, dispatch)
  }
}
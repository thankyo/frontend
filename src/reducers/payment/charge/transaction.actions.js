import authService from 'reducers/util/auth';

import { dispatchPromise, event } from "reducers/util/promiseStates";

export const GET_PENDING_CHARGES = event("GET_PENDING_CHARGES");
export const GET_PENDING_CHARGES_CSV = event("GET_PENDING_CHARGES_CSV");

export const GET_CHARGES = event("GET_CHARGES");
export const GET_CHARGES_CSV = event("GET_CHARGES_CSV");

export function getPendingCharges(id) {
  return (dispatch) => {
    let p = authService.get(`/api/v1/payment/${id}/charge/pending`).then(transactions => ({ id, transactions }));
    return dispatchPromise(p, GET_PENDING_CHARGES, dispatch);
  }
}

export function getPendingChargesCsv(id) {
  return (dispatch) => {
    let p = authService.getCSV(`/api/v1/payment/${id}/charge/pending/csv`, "pending_charges.csv");
    return dispatchPromise(p, GET_PENDING_CHARGES_CSV, dispatch);
  }
}

export function getCharges(id) {
  return (dispatch) => {
    let p = authService.get(`/api/v1/payment/${id}/charge`).then(charges => ({ id, charges }));
    dispatchPromise(p, GET_CHARGES, dispatch);
  }
}

export function getChargesCSV(id) {
  return (dispatch) => {
    let p = authService.getCSV(`/api/v1/payment/${id}/charge/csv`, "charges.csv");
    return dispatchPromise(p, GET_CHARGES_CSV, dispatch)
  }
}
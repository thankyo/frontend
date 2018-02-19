import authService from 'reducers/util/auth';
import { dispatchPromise } from "reducers/util/promiseStates";
import { saveAs } from "file-saver";

export const GET_PENDING_CHARGES = "GET_PENDING_CHARGES";
export const GET_PENDING_CHARGES_CSV = "GET_PENDING_CHARGES_CSV";
export const GET_CHARGES = "GET_CHARGES";
export const GET_CHARGES_CSV = "GET_CHARGES_CSV";

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
    let p = authService.signAndFetch(req, false)
      .then(res => res.text())
      .then(text => {
        let csv = new Blob([text], { type: "text/csv;charset=utf-8" });
        saveAs(csv, "pending_charges.csv")
      });
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
    let p = authService.signAndFetch(req, false)
      .then(res => res.text())
      .then(text => {
        let csv = new Blob([text], { type: "text/csv;charset=utf-8" });
        saveAs(csv, "charges.csv")
      });
    return dispatchPromise(p, GET_CHARGES_CSV, dispatch)
  }
}
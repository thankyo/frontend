import authService from 'reducers/util/auth';
import { dispatchPromise } from "reducers/util/promiseStates";
import { saveAs } from "file-saver";

export const GET_OUTGOING_TRANSACTIONS = "GET_OUTGOING_TRANSACTIONS";
export const GET_CHARGES = "GET_CHARGES";
export const GET_CHARGES_CSV = "GET_CHARGES_CSV";

export function getOutgoingTransactions(id) {
  return (dispatch) => {
    let req = new Request(`/api/v1/payment/${id}/transaction/outgoing`);
    let p = authService.signAndFetch(req).then(transactions => ({ id, transactions }));
    dispatchPromise(p, GET_OUTGOING_TRANSACTIONS, dispatch);
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
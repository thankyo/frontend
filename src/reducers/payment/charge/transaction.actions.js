import authService from 'reducers/util/auth';
import { dispatchPromise } from "reducers/util/promiseStates";

export const GET_OUTGOING_TRANSACTIONS = "GET_OUTGOING_TRANSACTIONS";
export const GET_CHARGES = "GET_CHARGES";

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
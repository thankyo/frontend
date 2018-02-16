import authService from '../util/auth';
import { dispatchPromise } from "reducers/util/promiseStates";

export const GET_OUTGOING_TRANSACTION = "GET_OUTGOING_TRANSACTION";
export const GET_INCOMING_TRANSACTION = "GET_INCOMING_TRANSACTION";

export function getOutgoingTransactions(id) {
  return (dispatch) => {
    let req = new Request(`/api/v1/payment/${id}/transaction/outgoing`);
    let p = authService.signAndFetch(req).then(transactions => ({ id, transactions }));
    dispatchPromise(p, GET_OUTGOING_TRANSACTION, dispatch);
  }
}

export function getIncomingTransactions(id) {
  return (dispatch) => {
    let req = new Request(`/api/v1/payment/${id}/transaction/incoming`);
    let p = authService.signAndFetch(req).then(transactions => ({ id, transactions }));
    dispatchPromise(p, GET_INCOMING_TRANSACTION, dispatch);
  }
}
import authService from 'reducers/util/auth';
import { dispatchPromise } from "reducers/util/promiseStates";

export const GET_INCOMING_TRANSACTIONS = "GET_INCOMING_TRANSACTIONS";
export const GET_PAYOUTS = "GET_PAYOUTS";

export function getIncomingTransactions(id) {
  return (dispatch) => {
    let req = new Request(`/api/v1/payment/${id}/transaction/incoming`);
    let p = authService.signAndFetch(req).then(transactions => ({ id, transactions }));
    dispatchPromise(p, GET_INCOMING_TRANSACTIONS, dispatch);
  }
}

export function getPayouts(id) {
  return (dispatch) => {
    let req = new Request(`/api/v1/payment/${id}/payout`);
    let p = authService.signAndFetch(req).then(payouts => ({ id, payouts }));
    dispatchPromise(p, GET_PAYOUTS, dispatch)
  }
}
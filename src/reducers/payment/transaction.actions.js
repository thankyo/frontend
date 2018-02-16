import authService from '../util/auth';
import { dispatchPromise } from "reducers/util/promiseStates";

export const GET_PENDING_TRANSACTION = "GET_PENDING_TRANSACTION";

export function getPendingTransactions(id) {
  return (dispatch) => {
    let req = new Request(`/api/v1/payment/${id}/pending`);
    let p = authService.signAndFetch(req).then(transactions => ({ id, transactions }));
    dispatchPromise(p, GET_PENDING_TRANSACTION, dispatch);
  }
}
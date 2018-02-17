import authService from "../../util/auth";
import { dispatchPromise } from '../../util/promiseStates';

export const PAYOUT_ACCOUNT_GET = "PAYOUT_ACCOUNT_GET";
export const PAYOUT_ACCOUNT_DELETE = "PAYOUT_ACCOUNT_DELETE";

export function getPayoutAccount() {
  return (dispatch) => {
    let req = new Request("/api/v1/payment/my/payout/account");
    let p = authService.signAndFetch(req);
    return dispatchPromise(p, PAYOUT_ACCOUNT_GET, dispatch);
  }
}

export function deletePayoutAccount() {
  return (dispatch) => {
    let req = new Request("/api/v1/payment/my/payout/account", { method: "DELETE" });
    let p = authService.signAndFetch(req);
    return dispatchPromise(p, PAYOUT_ACCOUNT_DELETE, dispatch);
  }
}

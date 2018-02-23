import authService from "../../util/auth";
import { dispatchPromise, event } from '../../util/promiseStates';

export const PAYOUT_ACCOUNT_GET = event("PAYOUT_ACCOUNT_GET");
export const PAYOUT_ACCOUNT_DELETE = event("PAYOUT_ACCOUNT_DELETE");

export function getPayoutAccount() {
  return (dispatch) => {
    let p = authService.get("/api/v1/payment/my/payout/account");
    return dispatchPromise(p, PAYOUT_ACCOUNT_GET, dispatch);
  }
}

export function deletePayoutAccount() {
  return (dispatch) => {
    let p = authService.remove("/api/v1/payment/my/payout/account");
    return dispatchPromise(p, PAYOUT_ACCOUNT_DELETE, dispatch);
  }
}

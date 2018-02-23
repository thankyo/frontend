import authService from "../../util/auth";
import { dispatchPromise, event } from '../../util/promiseStates';

export const PAYOUT_ACCOUNT_GET = event("PAYOUT_ACCOUNT_GET");
export const PAYOUT_ACCOUNT_DELETE = event("PAYOUT_ACCOUNT_DELETE");

export const getPayoutAccount = PAYOUT_ACCOUNT_GET.getMy("/api/v1/payment/$id/payout/account");

export function deletePayoutAccount() {
  return (dispatch) => {
    let p = authService.remove("/api/v1/payment/my/payout/account");
    return dispatchPromise(p, PAYOUT_ACCOUNT_DELETE, dispatch);
  }
}

import { event } from '../../util/promiseStates';

export const PAYOUT_ACCOUNT_GET = event("PAYOUT_ACCOUNT_GET");
export const PAYOUT_ACCOUNT_DELETE = event("PAYOUT_ACCOUNT_DELETE");

export const getPayoutAccount = PAYOUT_ACCOUNT_GET.getMy("/api/v1/payment/$id/payout/account");
export const deletePayoutAccount = PAYOUT_ACCOUNT_DELETE.removeMy("/api/v1/payment/$id/payout/account");

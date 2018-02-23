import { asSingleReducer, loadingPromiseReducer } from 'reducers/util/promiseStates';

import { PAYOUT_ACCOUNT_GET, PAYOUT_ACCOUNT_DELETE } from './account.actions';

export default asSingleReducer(
  loadingPromiseReducer(PAYOUT_ACCOUNT_GET),
  loadingPromiseReducer(PAYOUT_ACCOUNT_DELETE)
);
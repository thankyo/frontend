import { asSingleReducer, promiseReducer } from 'reducers/util/promiseStates';

import { PAYOUT_ACCOUNT_GET, PAYOUT_ACCOUNT_DELETE } from './account.actions';

const initialState = false;

export default asSingleReducer(
  promiseReducer(PAYOUT_ACCOUNT_GET, initialState),
  promiseReducer(PAYOUT_ACCOUNT_DELETE, initialState)
);
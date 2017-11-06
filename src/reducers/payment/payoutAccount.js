import { PAYOUT_ACCOUNT_GET, PAYOUT_ACCOUNT_DELETE } from './payoutAccount.actions';
import { combineReducersInSingle, promiseReducer } from '../util/promiseStates';

const initialState = false;

export default combineReducersInSingle(
  promiseReducer(PAYOUT_ACCOUNT_GET, initialState),
  promiseReducer(PAYOUT_ACCOUNT_DELETE, initialState,  (state, payload) => state, (state, payload) => false)
);
import { CHARGE_ACCOUNT_GET, CHARGE_ACCOUNT_SET, CHARGE_ACCOUNT_DELETE } from './chargeAccount.actions';
import { combineReducersInSingle, promiseReducer } from '../util/promiseStates';

const initialState = {
  isMissing: true,
  brand: "Visa",
  last4: "0000",
  type: "stripe"
};

export default combineReducersInSingle(
  promiseReducer(CHARGE_ACCOUNT_GET, initialState),
  promiseReducer(CHARGE_ACCOUNT_SET, initialState),
  promiseReducer(CHARGE_ACCOUNT_DELETE, initialState, (state, payload) => state, (state, payload) => initialState),
);
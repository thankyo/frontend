import { combineReducers } from "redux";
import { asSingleReducer, promiseReducer, promiseReducerDB } from 'reducers/util/promiseStates';

import { GET_CHARGES, GET_PENDING_CHARGES } from "./transaction.actions";
import { CHARGE_CARD_GET, CHARGE_CARD_SET, CHARGE_CARD_DELETE } from './card.actions';
import { CHARGE_LIMIT_GET, CHARGE_LIMIT_SET } from "./limit.actions";

const DEFAULT_LIMIT_STATE = {
  amount: 0,
  currency: "USD"
};

const setLimitReducer = (state = DEFAULT_LIMIT_STATE, { type, payload }) => {
  switch (type) {
    case CHARGE_LIMIT_SET:
      return payload;
    default:
      return state;
  }
};

const limitReducer = asSingleReducer(
  promiseReducer(CHARGE_LIMIT_SET, DEFAULT_LIMIT_STATE),
  promiseReducer(CHARGE_LIMIT_GET, DEFAULT_LIMIT_STATE),
  setLimitReducer
);

const DEFAULT_CARD = {
  isMissing: true,
  brand: "Visa",
  last4: "0000",
  type: "stripe"
};

const cardReducer = asSingleReducer(
  promiseReducer(CHARGE_CARD_GET, DEFAULT_CARD),
  promiseReducer(CHARGE_CARD_SET, DEFAULT_CARD),
  promiseReducer(CHARGE_CARD_DELETE, DEFAULT_CARD, (state) => state, (state, payload) => DEFAULT_CARD),
);

export default combineReducers({
  card: cardReducer,
  limit: limitReducer,
  transaction: combineReducers({
    charge: promiseReducerDB(GET_CHARGES),
    byUser: promiseReducerDB(GET_PENDING_CHARGES)
  })
})
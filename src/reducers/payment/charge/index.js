import { combineReducers } from "redux";
import { combineReducersInSingle, promiseReducer, promiseReducerDB } from 'reducers/util/promiseStates';

import { GET_CHARGES, GET_OUTGOING_TRANSACTIONS } from "./transaction.actions";
import { CHARGE_CARD_GET, CHARGE_CARD_SET, CHARGE_CARD_DELETE } from './card.actions';
import { GET_LIMIT, SET_LIMIT } from "./limit.actions";

const DEFAULT_LIMIT_STATE = {
  amount: 0,
  currency: "USD"
};

const setLimitReducer = (state = DEFAULT_LIMIT_STATE, { type, payload }) => {
  switch (type) {
    case SET_LIMIT:
      return payload;
    default:
      return state;
  }
};

const limitReducer = combineReducersInSingle(
  promiseReducer(SET_LIMIT, DEFAULT_LIMIT_STATE),
  promiseReducer(GET_LIMIT, DEFAULT_LIMIT_STATE),
  setLimitReducer
);

const DEFAULT_CARD = {
  isMissing: true,
  brand: "Visa",
  last4: "0000",
  type: "stripe"
};

const cardReducer = combineReducersInSingle(
  promiseReducer(CHARGE_CARD_GET, DEFAULT_CARD),
  promiseReducer(CHARGE_CARD_SET, DEFAULT_CARD),
  promiseReducer(CHARGE_CARD_DELETE, DEFAULT_CARD, (state) => state, (state, payload) => DEFAULT_CARD),
);

export default combineReducers({
  card: cardReducer,
  limit: limitReducer,
  transaction: combineReducers({
    charge: promiseReducerDB(GET_CHARGES),
    byUser: promiseReducerDB(GET_OUTGOING_TRANSACTIONS)
  })
})
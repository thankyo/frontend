import { combineReducers } from "redux";
import { promiseReducerDB } from "reducers/util/promiseStates";

import { GET_INCOMING_TRANSACTIONS, GET_PAYOUTS } from "./transaction.actions";

export default combineReducers({
  byUser: promiseReducerDB(GET_INCOMING_TRANSACTIONS),
  payout: promiseReducerDB(GET_PAYOUTS),
})
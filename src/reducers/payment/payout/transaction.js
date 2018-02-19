import { combineReducers } from "redux";
import { promiseReducerDB } from "reducers/util/promiseStates";

import { GET_PENDING_PAYOUTS, GET_PAYOUTS } from "./transaction.actions";

export default combineReducers({
  byUser: promiseReducerDB(GET_PENDING_PAYOUTS),
  payout: promiseReducerDB(GET_PAYOUTS),
})
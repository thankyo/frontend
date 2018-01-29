import { promiseReducer } from "./util/promiseStates";
import { SEARCH_BY_TAG, SEARCH_BY_AUTHOR } from "./search.actions";
import { combineReducers } from "redux";

export default combineReducers({
  tags: promiseReducer(SEARCH_BY_TAG, []),
  author: promiseReducer(SEARCH_BY_AUTHOR, [])
});
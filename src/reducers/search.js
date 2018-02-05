import { promiseReducer, promiseReducerDB } from "./util/promiseStates";
import { SEARCH_BY_TAG, SEARCH_BY_AUTHOR, SEARCH_BY_PROJECT } from "./search.actions";
import { combineReducers } from "redux";
import {LOCATION_CHANGE} from "react-router-redux";
import queryString from "query-string";

function queryReducer(state = "", { type, payload }) {
  switch (type) {
    case (LOCATION_CHANGE):
      let { pathname, search } = payload;
      if (pathname === "/search") {
        return queryString.parse(search).query;
      }
      return state;
    default:
      return state;
  }
}

export default combineReducers({
  query: queryReducer,
  tags: promiseReducer(SEARCH_BY_TAG, []),
  author: promiseReducerDB(SEARCH_BY_AUTHOR),
  project: promiseReducerDB(SEARCH_BY_PROJECT)
});
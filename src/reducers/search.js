import { promiseReducer } from "./util/promiseStates";
import { SEARCH_BY_TAG, SEARCH_BY_PROJECT } from "./search.actions";
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

function projectReducer(state = {}, { type, payload }) {
  switch (type) {
    case `${SEARCH_BY_PROJECT}.fulfilled`:
      let { id, posts } = payload;
      return Object.assign({}, state, { [id]: posts.map(({ _id }) => _id) });
    default:
      return state;
  }
}

export default combineReducers({
  query: queryReducer,
  tags: promiseReducer(SEARCH_BY_TAG, [], (state, _) => state, (state, payload) => payload.map(({ _id }) => _id)),
  project: projectReducer
});
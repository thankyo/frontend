import { promiseReducer } from "./util/promiseStates";
import { SEARCH_BY_TAG, SEARCH_BY_PROJECT } from "./search.actions";
import { REFRESH_PROJECT_FEED } from "reducers/project.actions";
import { combineReducers } from "redux";
import {LOCATION_CHANGE} from "react-router-redux";
import queryString from "query-string";

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

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
    case `${REFRESH_PROJECT_FEED}.fulfilled`:
      let { id, posts } = payload;
      let prjIds = posts.map(({ _id }) => _id).concat(state[id] || []).filter(onlyUnique);

      return Object.assign({}, state, { [id]: prjIds });
    default:
      return state;
  }
}

export default combineReducers({
  query: queryReducer,
  tags: promiseReducer(SEARCH_BY_TAG, [], (state, _) => state, (state, payload) => payload.map(({ _id }) => _id)),
  project: projectReducer
});
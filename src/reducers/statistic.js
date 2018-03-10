import { combineReducers } from "redux";

import { asSingleReducer, promiseReducerDB } from "./util/promiseStates";
import { GET_CONTRIBUTIONS } from "./statistic.actions";

import { POST_LOVE } from "reducers/post/post.actions";

function contributionLovedReducer(state = {}, { type }) {
  switch (type) {
    case POST_LOVE.pending: {
      let { my: { contributions = 0 } = {} } = state;
      contributions++;
      return {
        ...state,
        my: { contributions }
      };
    }
    case POST_LOVE.rejected: {
      let { my: { contributions = 0 } = {} } = state;
      contributions--;
      return {
        ...state,
        my: { contributions }
      };
    }
    default :
      return state;
  }
}

export default combineReducers({
  contribution: asSingleReducer(promiseReducerDB(GET_CONTRIBUTIONS), contributionLovedReducer)
})
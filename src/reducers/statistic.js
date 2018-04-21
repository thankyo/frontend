import { combineReducers } from "redux";

import { asSingleReducer, promiseReducerDB } from "./util/promiseStates";
import { GET_CONTRIBUTIONS } from "./statistic.actions";

import { POST_LOVE } from "reducers/post/post.actions";

const INITIAL_STATE = { my: {} }

function contributionLovedReducer(state = INITIAL_STATE, { type }) {
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
  contribution: asSingleReducer(promiseReducerDB(GET_CONTRIBUTIONS, INITIAL_STATE), contributionLovedReducer)
})
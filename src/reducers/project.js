import { promiseReducer } from "./util/promiseStates";
import { combineReducers } from "redux"
import { GET_MY_PROJECTS, SET_ACTIVE_PROJECT } from "./project.actions";

function activeProjectReducer(state = {}, { type, payload }) {
  switch (type) {
    case SET_ACTIVE_PROJECT:
      return payload;
    default:
      return state;
  }
}

export default combineReducers({
  all: promiseReducer(GET_MY_PROJECTS, []),
  active: activeProjectReducer
})
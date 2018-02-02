import { promiseReducer } from "./util/promiseStates";
import { combineReducers } from "redux"
import { GET_MY_PROJECTS } from "./project.actions";

function byIdReducer(state = {}, { type, payload }) {
  switch (type) {
    case `${GET_MY_PROJECTS}.fulfilled`:
      return payload.reduce((agg, project) => {
        agg[project._id] = project;
        return agg;
      }, {});
    default:
      return state;
  }
}

export default combineReducers({
  all: promiseReducer(GET_MY_PROJECTS, []),
  byId: byIdReducer
})
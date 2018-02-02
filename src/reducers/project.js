import { promiseReducer, promiseReducerDB } from "./util/promiseStates";
import { combineReducers } from "redux"
import { GET_MY_PROJECTS, GET_PROJECT, GET_USER_PROJECTS } from "./project.actions";

function byIdReducer(state = {}, { type, payload }) {
  switch (type) {
    case `${GET_MY_PROJECTS}.fulfilled`:
      let projects = payload.reduce((agg, project) => {
        agg[project._id] = project;
        return agg;
      }, {});
      return Object.assign(projects, state);
    case `${GET_PROJECT}.fulfilled`:
      return Object.assign({}, state, { [payload._id]: payload });
    default:
      return state;
  }
}

export default combineReducers({
  all: promiseReducer(GET_MY_PROJECTS, []),
  byId: byIdReducer,
  byUser: promiseReducerDB(GET_USER_PROJECTS)
})
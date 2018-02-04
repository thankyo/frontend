import { promiseReducerDB } from "./util/promiseStates";
import { combineReducers } from "redux"
import { GET_PROJECT, GET_USER_PROJECTS } from "./project.actions";

function byIdReducer(state = {}, { type, payload }) {
  switch (type) {
    case `${GET_USER_PROJECTS}.fulfilled`:
      let projectById = payload.projects.reduce((agg, project) => {
        agg[project._id] = project;
        return agg
      }, {});
      return Object.assign({}, state, projectById);
    case `${GET_PROJECT}.fulfilled`:
      return Object.assign({}, state, { [payload._id]: payload });
    default:
      return state;
  }
}

export default combineReducers({
  byId: byIdReducer,
  byUser: promiseReducerDB(GET_USER_PROJECTS)
})
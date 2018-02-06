import { promiseReducerDB } from "./util/promiseStates";
import { combineReducers } from "redux"
import { GET_PROJECT, GET_USER_PROJECTS, GET_SUPPORTED } from "./project.actions";

function byIdReducer(state = {}, { type, payload }) {
  switch (type) {
    case `${GET_USER_PROJECTS}.fulfilled`:
    case `${GET_SUPPORTED}.fulfilled`:
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

function byUserReducer(state = {}, { type, payload }) {
  switch (type) {
    case `${GET_USER_PROJECTS}.fulfilled`:
      let { id: user, projects } = payload;
      return Object.assign({}, state, { [user]: projects.map(({ _id }) => _id) });
    default:
      return state;
  }
}

function supportedReducer(state = {}, { type, payload }) {
  switch (type) {
    case `${GET_SUPPORTED}.fulfilled`:
      let { id: user, projects } = payload;
      return Object.assign({}, state, { [user]: projects.map(({ _id }) => _id) });
    default:
      return state;
  }
}

export default combineReducers({
  byId: byIdReducer,
  byUser: byUserReducer,
  supported: supportedReducer
})
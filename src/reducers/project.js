import { combineReducers } from "redux"
import { PROJECT_GET, GET_USER_PROJECTS, GET_SUPPORTED, REFRESH_MY_PROJECTS } from "./project.actions";
import {
  GET_OWNED_PROJECTS, UPDATE_MY_PROJECT, ENRICH_PROJECT, CREATE_PROJECT,
  DELETE_PROJECT
} from "reducers/project.actions";

function byIdReducer(state = {}, { type, payload }) {
  switch (type) {
    case GET_OWNED_PROJECTS.fulfilled:
      payload = { projects: payload.installed };
    case GET_USER_PROJECTS.fulfilled:
    case REFRESH_MY_PROJECTS.fulfilled:
    case GET_SUPPORTED.fulfilled:
      let projectById = payload.projects.reduce((agg, project) => {
        agg[project._id] = project;
        return agg
      }, {});
      return Object.assign({}, state, projectById);
    case PROJECT_GET.fulfilled:
      return Object.assign({}, state, { [payload._id]: payload });
    case UPDATE_MY_PROJECT.fulfilled:
    case CREATE_PROJECT.fulfilled:
      return Object.assign({}, state, { [payload._id]: payload });
    default:
      return state;
  }
}

function byUserReducer(state = {}, { type, payload }) {
  switch (type) {
    case GET_USER_PROJECTS.fulfilled: {
      let { id: user, projects } = payload;
      return Object.assign({}, state, { [user]: projects.map(({ _id }) => _id) });
    }
    case CREATE_PROJECT.fulfilled:
    case UPDATE_MY_PROJECT.fulfilled: {
      let { _id } = payload;
      if (state.my.includes(_id)) {
        return state;
      } else {
        return Object.assign({}, state, { "my": state.my.concat(_id) });
      }
    }
    case DELETE_PROJECT.fulfilled: {
      let { _id } = payload;
      return Object.assign({}, { "my": state.my.filter(id => id !== _id) });
    }
    default:
      return state;
  }
}

function supportedReducer(state = {}, { type, payload }) {
  switch (type) {
    case GET_SUPPORTED.fulfilled:
      let { id: user, projects } = payload;
      return Object.assign({}, state, { [user]: projects.map(({ _id }) => _id) });
    default:
      return state;
  }
}

function ownedReducer(state = { installed: [], pending: [] }, { type, payload }) {
  switch (type) {
    case GET_OWNED_PROJECTS.fulfilled: {
      let { installed, pending } = payload;
      let pendingNotInstalled = pending.filter(url => installed.find(inl => inl.url === url) === undefined);
      return {
        installed: installed.map(({ _id }) => _id),
        pending: pendingNotInstalled
      };
    }
    case DELETE_PROJECT.fulfilled:
      return Object.assign({}, state, {
        installed: state.installed.filter(id => id !== payload._id),
        pending: state.pending.concat(payload.url),
      });
    case CREATE_PROJECT.fulfilled:
      return {
        installed: state.installed.concat(payload._id),
        pending: state.pending.filter(url => url !== payload.url)
      };
    default:
      return state;
  }
}

function pendingReducer(state = {}, { type, payload }) {
  switch (type) {
    case ENRICH_PROJECT.fulfilled:
      return Object.assign({}, state, { [payload.url]: payload });
    default:
      return state;
  }
}

export default combineReducers({
  byId: byIdReducer,
  byUser: byUserReducer,
  supported: supportedReducer,
  owned: ownedReducer,
  pending: pendingReducer,
})
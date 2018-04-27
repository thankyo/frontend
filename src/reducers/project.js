import { combineReducers } from "redux"
import { PROJECT_GET, PROJECT_GET_BY_USER, PROJECT_GET_SUPPORTED } from "./project.actions";
import {
  PROJECT_OWNERSHIP_GET, PROJECT_UPDATE, PROJECT_CREATE,
  PROJECT_DELETE, PROJECT_OWNERSHIP_DIBS, PROJECT_OWNERSHIP_DELETE, PROJECT_OWNERSHIP_REFRESH
} from "reducers/project.actions";

function byIdReducer(state = {}, { type, payload }) {
  switch (type) {
    case PROJECT_OWNERSHIP_GET.fulfilled:
      payload = { projects: payload.installed };
    case PROJECT_GET_BY_USER.fulfilled:
    case PROJECT_GET_SUPPORTED.fulfilled:
      let projectById = payload.projects.reduce((agg, project) => {
        agg[project._id] = project;
        return agg
      }, {});
      return Object.assign({}, state, projectById);
    case PROJECT_GET.fulfilled:
    case PROJECT_UPDATE.fulfilled:
    case PROJECT_CREATE.fulfilled:
      return Object.assign({}, state, { [payload._id]: payload });
    default:
      return state;
  }
}

function byUserReducer(state = {}, { type, payload }) {
  switch (type) {
    case PROJECT_GET_BY_USER.fulfilled: {
      let { id: user, projects } = payload;
      return Object.assign({}, state, { [user]: projects.map(({ _id }) => _id) });
    }
    case PROJECT_CREATE.fulfilled: {
      return { ... state, "my": state.my.concat(payload._id) };
    }
    case PROJECT_DELETE.fulfilled: {
      let { _id } = payload;
      return { ... state,  "my": state.my.filter(id => id !== _id) };
    }
    default:
      return state;
  }
}

function supportedReducer(state = {}, { type, payload }) {
  switch (type) {
    case PROJECT_GET_SUPPORTED.fulfilled:
      let { id: user, projects } = payload;
      return Object.assign({}, state, { [user]: projects.map(({ _id }) => _id) });
    default:
      return state;
  }
}

function ownedReducer(state = { installed: [], pending: [], owned: [], isLoading: false }, { type, payload }) {
  switch (type) {
    case PROJECT_OWNERSHIP_GET.pending: {
      return { ... state, isLoading: true };
    }
    case PROJECT_OWNERSHIP_DELETE.fulfilled:
    case PROJECT_OWNERSHIP_REFRESH.fulfilled:
    case PROJECT_OWNERSHIP_DIBS.fulfilled:
    case PROJECT_OWNERSHIP_GET.fulfilled: {
      return {
        ... payload,
        installed: payload.installed.map(({ _id }) => _id),
        isLoading: false
      };
    }
    case PROJECT_DELETE.fulfilled:
      return {
        ...state,
        installed: state.installed.filter(id => id !== payload._id)
      };
    case PROJECT_CREATE.fulfilled:
      return {
        ... state,
        installed: state.installed.concat(payload._id),
      };
    default:
      return state;
  }
}

export default combineReducers({
  byId: byIdReducer,
  byUser: byUserReducer,
  supported: supportedReducer,
  owned: ownedReducer
})
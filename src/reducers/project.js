import { combineReducers } from "redux"
import { PROJECT_GET, GET_USER_PROJECTS, GET_SUPPORTED, REFRESH_MY_PROJECTS } from "./project.actions";
import {
  GET_OWNED_PROJECTS, UPDATE_MY_PROJECT, CREATE_PROJECT,
  DELETE_PROJECT, PROJECT_DIBS
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

function ownedReducer(state = { installed: [], pending: [], owned: [], isLoading: false }, { type, payload }) {
  switch (type) {
    case GET_OWNED_PROJECTS.pending: {
      return Object.assign({}, state, { isLoading: true })
    }
    case GET_OWNED_PROJECTS.pending: {
      return Object.assign({}, state, { isLoading: false })
    }
    case GET_OWNED_PROJECTS.fulfilled: {
      let { installed, owned } = payload;
      let pending = owned.filter(prj => installed.find(inl => inl.url === prj.url) === undefined);
      return {
        installed: installed.map(({ _id }) => _id),
        owned,
        pending,
        isLoading: false
      };
    }
    case DELETE_PROJECT.fulfilled:
      let removed = Object.assign({}, payload);
      delete removed.user;
      delete removed._id;
      return Object.assign({}, state, {
        installed: state.installed.filter(id => id !== payload._id),
        pending: state.pending.concat(removed),
      });
    case CREATE_PROJECT.fulfilled:
      return {
        installed: state.installed.concat(payload._id),
        pending: state.pending.filter(({ url }) => url !== payload.url)
      };
    case PROJECT_DIBS.fulfilled:
      return { ... state, pending: [payload].concat(state.pending) };
    default:
      return state;
  }
}

function dibsReducer(state = { }, { type, payload }) {
  switch (type) {
    case PROJECT_DIBS.fulfilled:
      return payload;
    default:
      return state;
  }
}

export default combineReducers({
  byId: byIdReducer,
  byUser: byUserReducer,
  supported: supportedReducer,
  owned: ownedReducer,
  dibs: dibsReducer
})
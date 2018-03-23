import { combineReducers } from "redux";

import { POST_SEARCH_BY_PROJECT, POST_SEARCH_BY_TAG, POST_LOVE, POST_SAVE, POST_GET } from "./post.actions";
import { REFRESH_PROJECT_FEED } from "../project.actions";

import authService from "reducers/util/auth";
import { promiseReducer } from "reducers/util/promiseStates";
import { POST_DELETE } from "reducers/post/post.actions";

function markLoved(post) {
  let user = authService.getUser();
  post.isLoved = post.thank.supporters.indexOf(user) !== -1;
  post.isMy = post.project.user === user;
  return post;
}

function byIdReducer(stateMap = {}, { type, payload }) {
  switch (type) {
    case REFRESH_PROJECT_FEED.fulfilled:
    case POST_SEARCH_BY_PROJECT.fulfilled: {
      let { posts } = payload;
      posts.forEach(markLoved);
      let postToId = posts.reduce((agg, post) => {
        agg[post._id] = markLoved(post);
        return agg;
      }, {});
      return Object.assign({}, stateMap, postToId);
    }
    case POST_SEARCH_BY_TAG.fulfilled: {
      let postToId = payload.reduce((agg, post) => {
        agg[post._id] = markLoved(post);
        return agg;
      }, {});
      return Object.assign({}, stateMap, postToId);
    }
    case POST_SAVE.fulfilled:
    case POST_GET.fulfilled:
    case POST_LOVE.fulfilled:
      return Object.assign({}, stateMap, { [payload._id]: markLoved(payload) });
    case POST_DELETE.fulfilled:
      let newState =  Object.assign({}, stateMap);
      delete newState[payload._id];
      return newState;
    default:
      return stateMap;
  }
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function byProjectReducer(state = {}, { type, payload }) {
  switch (type) {
    case POST_SEARCH_BY_PROJECT.fulfilled:
    case REFRESH_PROJECT_FEED.fulfilled:
      let { id, posts } = payload;
      let prjIds = posts.map(({ _id }) => _id).concat(state[id] || []).filter(onlyUnique);
      return Object.assign({}, state, { [id]: prjIds });
    case POST_DELETE.fulfilled: {
      let { project, _id } = payload;
      let projectId = project._id;
      let posts = state[projectId].filter(id => id !== _id);
      return Object.assign({}, state, { [projectId]: posts });
    }
    default:
      return state;
  }
}

export default combineReducers({
  byId: byIdReducer,
  byProject: byProjectReducer,
  byTag: promiseReducer(POST_SEARCH_BY_TAG, [], (state, _) => state, (state, payload) => payload.map(({ _id }) => _id)),
})
import authService from "../util/auth";
import { dispatchPromise, event } from "../util/promiseStates";
import { action } from "reducers/util/action";

export const POST_SAVE = event("POST_SAVE");
export const POST_EDIT = "POST_EDIT";
export const POST_LOVE = event("POST_LOVE");

export function enableEdit(id) {
  return (dispatch) => {
    dispatch(action(POST_EDIT, id))
  }
}

export function savePost(post, id) {
  return (dispatch) => {
    let p = authService.post("/api/v1/thank/graph/my", post);
    p.then(() => dispatch(enableEdit(id)));
    return dispatchPromise(p, POST_SAVE, dispatch);
  }
}

export function lovePost(url) {
  return (dispatch) => {
    let p = authService.post(`/api/v1/thank//graph/my/support`, { url });
    return dispatchPromise(p, POST_LOVE, dispatch);
  }
}

export const POST_SEARCH_BY_TAG = event("POST_SEARCH_BY_TAG");
export const POST_SEARCH_BY_PROJECT = event("POST_SEARCH_BY_PROJECT");

export function searchByTag(tags) {
  return (dispatch) => {
    let p = authService.get(`/api/v1/thank/graph/search?tags=${encodeURIComponent(tags)}`);
    return dispatchPromise(p, POST_SEARCH_BY_TAG, dispatch);
  }
}

export function searchByProject(project) {
  return (dispatch) => {
    let p = authService.get(`/api/v1/thank/graph/project/${encodeURIComponent(project)}`).then(posts => ({ id: project, posts }));
    return dispatchPromise(p, POST_SEARCH_BY_PROJECT, dispatch);
  }
}
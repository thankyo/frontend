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
    let req = new Request("/api/v1/thank/graph/my", { method: "POST", body: JSON.stringify(post)});
    let p = authService.signAndFetch(req);
    p.then(() => dispatch(enableEdit(id)));
    return dispatchPromise(p, POST_SAVE, dispatch);
  }
}

export function lovePost(uri) {
  return (dispatch) => {
    let req = new Request(`/api/v1/thank/http/${uri}`, { method: "PUT", body: JSON.stringify({})});
    let p = authService.signAndFetch(req);
    return dispatchPromise(p, POST_LOVE, dispatch);
  }
}

export const POST_SEARCH_BY_TAG = event("POST_SEARCH_BY_TAG");
export const POST_SEARCH_BY_PROJECT = event("POST_SEARCH_BY_PROJECT");

export function searchByTag(tags) {
  return (dispatch) => {
    let req = new Request(`/api/v1/thank/graph/search?tags=${encodeURIComponent(tags)}`);
    let p = authService.signAndFetch(req);
    return dispatchPromise(p, POST_SEARCH_BY_TAG, dispatch);
  }
}

export function searchByProject(project) {
  return (dispatch) => {
    let req = new Request(`/api/v1/thank/graph/project/${encodeURIComponent(project)}`);
    let p = authService.signAndFetch(req).then(posts => ({ id: project, posts }));
    return dispatchPromise(p, POST_SEARCH_BY_PROJECT, dispatch);
  }
}
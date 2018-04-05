import authService from "../util/auth";
import { dispatchPromise, event } from "../util/promiseStates";

export const POST_GET = event("POST_GET");
export const POST_SAVE = event("POST_SAVE");
export const POST_LOVE = event("POST_LOVE");
export const POST_DELETE = event("POST_DELETE");

export function getPost(id) {
  return (dispatch, getState) => {
    let { post: { byId } } = getState();
    if (byId[id] === undefined) {
      let p = authService.get(`/api/v1/thank/post/${id}`);
      return dispatchPromise(p, POST_GET, dispatch);
    }
  }
}

export function savePost(post) {
  return (dispatch) => {
    let p = authService.post("/api/v1/thank/graph/my", post);
    return dispatchPromise(p, POST_SAVE, dispatch);
  }
}

export function deletePost(post) {
  return (dispatch) => {
    let p = authService.remove(`/api/v1/thank/post/${post._id}`).then(() => post);
    return dispatchPromise(p, POST_DELETE, dispatch);
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
    if (!tags || tags.trim().length === 0) {
      return Promise.resolve();
    }
    let p = fetch(`/api/v1/thank/graph/search?tags=${encodeURIComponent(tags)}`).then(res => res.json());
    return dispatchPromise(p, POST_SEARCH_BY_TAG, dispatch);
  }
}

export function searchByProject(project) {
  return (dispatch) => {
    let p = fetch(`/api/v1/thank/graph/project/${encodeURIComponent(project)}`)
      .then(res => res.json())
      .then(posts => ({ id: project, posts }));
    return dispatchPromise(p, POST_SEARCH_BY_PROJECT, dispatch);
  }
}
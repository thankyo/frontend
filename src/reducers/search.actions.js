import authService from "./util/auth";
import { dispatchPromise } from "./util/promiseStates";

export const SEARCH_BY_TAG = "SEARCH_BY_TAG";
export const SEARCH_BY_PROJECT = "SEARCH_BY_PROJECT";

export function searchByTag(tags) {
  return (dispatch) => {
    let req = new Request(`/api/v1/thank/graph/search?tags=${encodeURIComponent(tags)}`);
    let p = authService.signAndFetch(req);
    return dispatchPromise(p, SEARCH_BY_TAG, dispatch);
  }
}

export function searchByProject(project) {
  return (dispatch) => {
    let req = new Request(`/api/v1/thank/graph/project/${encodeURIComponent(project)}`);
    let p = authService.signAndFetch(req).then(posts => ({ id: project, posts }));
    return dispatchPromise(p, SEARCH_BY_PROJECT, dispatch);
  }
}
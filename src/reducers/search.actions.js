import authService from "./util/auth";
import { dispatchPromise } from "./util/promiseStates";

export const SEARCH_BY_TAG = "SEARCH_BY_TAG";
export const SEARCH_BY_AUTHOR = "SEARCH_BY_AUTHOR";

export function searchByTag(tags) {
  return (dispatch) => {
    let req = new Request(`/api/v1/thank/graph/search?tags=${encodeURIComponent(tags)}`);
    let p = authService.signAndFetch(req);
    return dispatchPromise(p, SEARCH_BY_TAG, dispatch);
  }
}

export function searchByAuthor(user) {
  return (dispatch) => {
    let req = new Request(`/api/v1/thank/graph/author/${encodeURIComponent(user)}`);
    let p = authService.signAndFetch(req).then(posts => ({ id: user, posts }));
    return dispatchPromise(p, SEARCH_BY_AUTHOR, dispatch);
  }
}
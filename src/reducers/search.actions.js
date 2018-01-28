import authService from "./util/auth";
import { dispatchPromise } from "./util/promiseStates";

export const SEARCH_BY_TAG = "SEARCH_BY_TAG";

export function searchByTag(tags) {
  return (dispatch) => {
    let req = new Request(
      `/api/v1/thank/graph/search?tags=${encodeURIComponent(tags)}`,
      {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
    let p = fetch(req);
    return dispatchPromise(p, SEARCH_BY_TAG, dispatch);
  }
}
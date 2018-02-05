import authService from "./util/auth";
import { dispatchPromise } from "./util/promiseStates";

export const SAVE_POST = "SAVE_POST";
export const LOVE_POST = "LOVE_POST";

export function savePost(post) {
  return (dispatch) => {
    let req = new Request("/api/v1/thank/graph/my", { method: "POST", body: JSON.stringify(post)});
    let p = authService.signAndFetch(req);
    return dispatchPromise(p, SAVE_POST, dispatch);
  }
}

export function lovePost(uri) {
  return (dispatch) => {
    let req = new Request(`/api/v1/thank/http/${uri}`, { method: "PUT", body: JSON.stringify({})});
    let p = authService.signAndFetch(req);
    return dispatchPromise(p, LOVE_POST, dispatch);
  }
}
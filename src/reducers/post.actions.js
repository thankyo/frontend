import authService from "./util/auth";
import { dispatchPromise, event } from "./util/promiseStates";
import { action } from "reducers/util/action";

export const SAVE_POST = event("SAVE_POST");
export const EDIT_POST = "EDIT_POST";
export const LOVE_POST = event("LOVE_POST");

export function enableEdit(id) {
  return (dispatch) => {
    dispatch(action(EDIT_POST, id))
  }
}

export function savePost(post, id) {
  return (dispatch) => {
    let req = new Request("/api/v1/thank/graph/my", { method: "POST", body: JSON.stringify(post)});
    let p = authService.signAndFetch(req);
    p.then(() => dispatch(enableEdit(id)));
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
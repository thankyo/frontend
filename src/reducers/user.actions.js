import authService from './util/auth';
import { dispatchPromise } from './util/promiseStates';

export const GET_USER = "GET_USER";
export const SAVE_USER = "SAVE_USER";

export function fetchUser(id) {
    return (dispatch) => {
      let req = new Request(`/api/v1/user/${id}/profile`);
      let p = authService.signAndFetch(req);
      return dispatchPromise(p, GET_USER, dispatch);
    }
}

export function saveUser(user) {
  return (dispatch) => {
    let req = new Request("/api/v1/user/my/profile", { method: POST, body: JSON.stringify(user)});
    let p = authService.signAndFetch(req);
    return dispatchPromise(p, SAVE_USER, dispatch);
  }
}
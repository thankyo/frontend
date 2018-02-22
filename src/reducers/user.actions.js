import authService from './util/auth';
import { dispatchPromise, event } from './util/promiseStates';

export const GET_USER = event("GET_USER");
export const SAVE_USER = event("SAVE_USER");

export function fetchUser(id) {
    return (dispatch) => {
      let req = new Request(`/api/v1/user/${id}/profile`);
      let p = authService.signAndFetch(req);
      return dispatchPromise(p, GET_USER, dispatch);
    }
}

export function saveUser(user) {
  return (dispatch) => {
    let req = new Request("/api/v1/user/my/profile", { method: 'PUT', body: JSON.stringify(user) });
    let p = authService.signAndFetch(req);
    return dispatchPromise(p, SAVE_USER, dispatch);
  }
}
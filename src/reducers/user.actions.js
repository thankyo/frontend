import authService from './util/auth';
import { dispatchPromise, event } from './util/promiseStates';

export const GET_USER = event("GET_USER");
export const SAVE_USER = event("SAVE_USER");

export function fetchUser(id) {
    return (dispatch) => {
      let p = authService.get(`/api/v1/user/${id}/profile`);
      return dispatchPromise(p, GET_USER, dispatch);
    }
}

export function saveUser(user) {
  return (dispatch) => {
    let p = authService.put("/api/v1/user/my/profile", user);
    return dispatchPromise(p, SAVE_USER, dispatch);
  }
}
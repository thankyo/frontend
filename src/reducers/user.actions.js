import authService from './util/auth';
import { dispatchPromise } from './util/promiseStates';

export const GET_USER = "GET_USER";

export function fetchUser(id) {
    return (dispatch) => {
      let req = new Request(`/api/v1/user/${id}/profile`);
      let p = authService.signAndFetch(req);
      return dispatchPromise(p, GET_USER, dispatch);
    }
}

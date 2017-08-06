import authService from '../util/auth';
import { dispatchPromise } from '../util/promiseStates';

export const GET_SUPPORTED = "GET_SUPPORTED";

export function getSupportedByMe() {
  return (dispatch) => {
    let url = new Request(`/api/v1/thank/supported/my`);
    let p = authService.signAndFetch(url, dispatch);
    dispatchPromise(p, GET_SUPPORTED, dispatch)
  }
}

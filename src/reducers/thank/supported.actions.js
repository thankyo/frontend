import authService from '../util/auth';
import { dispatchPromise } from '../util/promiseStates';

export const GET_SUPPORTED = "GET_SUPPORTED";

export function getSupportedByMe() {
  return (dispatch) => {
    let url = new Request(`/api/v1/thank/my/supported`);
    let p = authService.signAndFetch(url);
    dispatchPromise(p, GET_SUPPORTED, dispatch)
  }
}

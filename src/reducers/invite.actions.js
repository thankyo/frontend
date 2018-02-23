import authService from './util/auth';
import { dispatchPromise, event } from './util/promiseStates';
import { reset } from 'redux-form';

export const INVITE = event("INVITE");

export function invite(url) {
  return (dispatch) => {
    let p = authService.post("/api/v1/user/invite", url);
    return dispatchPromise(p, INVITE, dispatch).then((res) => dispatch(reset("invite")))
  }
}
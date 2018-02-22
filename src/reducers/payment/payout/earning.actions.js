import authService from '../../util/auth';
import { dispatchPromise, event } from '../../util/promiseStates';

export const GET_EARNINGS = event("GET_EARNINGS");

export function thisMonthEarnings() {
  return (dispatch) => {
    let date = new Date();
    let req = new Request(`/api/v1/thank/stat/my/${date.getFullYear()}/${date.getMonth() + 1}`);
    let p = authService.signAndFetch(req);
    return dispatchPromise(p, GET_EARNINGS, dispatch)
  }
}

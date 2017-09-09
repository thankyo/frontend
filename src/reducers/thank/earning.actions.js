import authService from '../util/auth';
import { dispatchPromise } from '../util/promiseStates';

export const GET_EARNINGS = "GET_EARNINGS";

export function thisMonthEarnings() {
  return (dispatch) => {
    let date = new Date();
    let req = new Request(
      `/api/v1/thank/stat/my/${date.getFullYear()}/${date.getMonth()}`,
      {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
    let p = authService.signAndFetch(req, dispatch);
    dispatchPromise(p, GET_EARNINGS, dispatch)
  }
}
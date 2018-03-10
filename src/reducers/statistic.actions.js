import authService from "./util/auth";
import { dispatchPromise, event } from "./util/promiseStates";

export const GET_CONTRIBUTIONS = event("GET_CONTRIBUTIONS");

export function getContributions(user) {
  return (dispatch) => {
    let p = authService.get(`/api/v1/payment/statistic/${user}/contribution`).then(({ user, contributions }) => ({ id: user, contributions}));
    return dispatchPromise(p, GET_CONTRIBUTIONS, dispatch);
   };
}

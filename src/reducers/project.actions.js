import authService from "./util/auth";
import { dispatchPromise } from "./util/promiseStates";

export const GET_MY_PROJECTS = "GET_MY_PROJECTS";

export function getMyProjects() {
  return (dispatch) => {
    let req = new Request(`/api/v1/thank/my/project`);
    let p = authService.signAndFetch(req);
    return dispatchPromise(p, GET_MY_PROJECTS, dispatch);
  }
}
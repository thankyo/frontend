import authService from "./util/auth";
import { dispatchPromise } from "./util/promiseStates";
import { action } from "./util/action";

export const GET_MY_PROJECTS = "GET_MY_PROJECTS";
export const SET_ACTIVE_PROJECT = "SET_ACTIVE_PROJECT";

export function getMyProjects() {
  return (dispatch) => {
    let req = new Request(`/api/v1/thank/my/project`);
    let p = authService.signAndFetch(req);
    dispatchPromise(p, GET_MY_PROJECTS, dispatch)
  }
}

export function setActiveProject(project) {
  return (dispatch) => {
    dispatch(action(SET_ACTIVE_PROJECT, project))
  }
}
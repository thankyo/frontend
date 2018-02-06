import authService from "./util/auth";
import { dispatchPromise } from "./util/promiseStates";

export const GET_PROJECT = "GET_PROJECT";
export const GET_USER_PROJECTS = "GET_USER_PROJECTS";
export const UPDATE_MY_PROJECT = "UPDATE_MY_PROJECT";
export const GET_SUPPORTED = "GET_SUPPORTED";

export function getSupportedByMe() {
  return (dispatch) => {
    let url = new Request(`/api/v1/thank/my/supported`);
    let p = authService.signAndFetch(url).then(projects => ({ id: "my", projects }));;
    return dispatchPromise(p, GET_SUPPORTED, dispatch)
  }
}

export function getProject(id) {
  return (dispatch) => {
    let req = new Request(`/api/v1/thank/project/${id}`);
    let p = authService.signAndFetch(req);
    return dispatchPromise(p, GET_PROJECT, dispatch);
  }
}

export function getProjectsByUser(user) {
  return (dispatch) => {
    let req = new Request(`/api/v1/thank/user/${user}/project`);
    let p = authService.signAndFetch(req).then(projects => ({ id: user, projects }));
    return dispatchPromise(p, GET_USER_PROJECTS, dispatch);
  }
}

export function updateProject(project) {
  return (dispatch) => {
    let req = new Request(`/api/v1/thank/my/project/${project._id}`, { method: 'PUT', body: JSON.stringify(project) });
    let p = authService.signAndFetch(req);
    return dispatchPromise(p, UPDATE_MY_PROJECT, dispatch);
  }
}


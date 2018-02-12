import authService from "./util/auth";
import { dispatchPromise } from "./util/promiseStates";

export const GET_PROJECT = "GET_PROJECT";
export const GET_SUPPORTED = "GET_SUPPORTED";
export const GET_USER_PROJECTS = "GET_USER_PROJECTS";

export const REFRESH_MY_PROJECTS = "REFRESH_MY_PROJECTS";
export const UPDATE_MY_PROJECT = "UPDATE_MY_PROJECT";
export const GET_OWNED_PROJECTS = "GET_OWNED_PROJECTS";

export function getSupportedByMe() {
  return (dispatch) => {
    let url = new Request(`/api/v1/thank/user/my/supported`);
    let p = authService.signAndFetch(url).then(projects => ({ id: "my", projects }));;
    return dispatchPromise(p, GET_SUPPORTED, dispatch)
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
    let req = new Request(`/api/v1/thank/project/${project._id}`, { method: 'PUT', body: JSON.stringify(project) });
    let p = authService.signAndFetch(req);
    return dispatchPromise(p, UPDATE_MY_PROJECT, dispatch);
  }
}

export function getOwnedProjects() {
  return (dispatch) => {
    let req = new Request(`/api/v1/thank/user/my/owned`);
    let p = authService.signAndFetch(req).then(projects => ({ projects }));
    return dispatchPromise(p, GET_OWNED_PROJECTS, dispatch);
  }
}

export function refreshMyProjects() {
  return (dispatch) => {
    let req = new Request(`/api/v1/thank/user/my/project`, { method: "PUT" });
    let p = authService.signAndFetch(req).then(projects => ({ projects }));
    return dispatchPromise(p, REFRESH_MY_PROJECTS, dispatch);
  }
}

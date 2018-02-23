import authService from "./util/auth";
import { dispatchPromise, event } from "./util/promiseStates";

export const PROJECT_GET = event("PROJECT_GET");
export const GET_SUPPORTED = event("GET_SUPPORTED");
export const GET_USER_PROJECTS = event("GET_USER_PROJECTS");

export const REFRESH_MY_PROJECTS = event("REFRESH_MY_PROJECTS");
export const UPDATE_MY_PROJECT = event("UPDATE_MY_PROJECT");
export const GET_OWNED_PROJECTS = event("GET_OWNED_PROJECTS");
export const REFRESH_PROJECT_FEED = event("REFRESH_PROJECT_FEED");

export const getProject = PROJECT_GET.getById("/api/v1/thank/project/$id");

export function getSupportedByMe() {
  return (dispatch) => {
    let p = authService.get(`/api/v1/thank/user/my/supported`).then(projects => ({ id: "my", projects }));;
    return dispatchPromise(p, GET_SUPPORTED, dispatch)
  }
}

export function getProjectsByUser(user) {
  return (dispatch) => {
    let p = authService.get(`/api/v1/thank/user/${user}/project`).then(projects => ({ id: user, projects }));
    return dispatchPromise(p, GET_USER_PROJECTS, dispatch);
  }
}

export function updateProject(project) {
  return (dispatch) => {
    let p = authService.put(`/api/v1/thank/project/${project._id}`, project);
    return dispatchPromise(p, UPDATE_MY_PROJECT, dispatch);
  }
}

export function refreshProjectFeed(project) {
  return (dispatch) => {
    let p = authService.get(`/api/v1/thank/project/${project}/feed`).then(posts => ({ id: project, posts }));
    return dispatchPromise(p, REFRESH_PROJECT_FEED, dispatch);
  }
}

export function getOwnedProjects() {
  return (dispatch) => {
    let p = authService.get(`/api/v1/thank/user/my/owned`).then(projects => ({ projects }));
    return dispatchPromise(p, GET_OWNED_PROJECTS, dispatch);
  }
}

export function refreshMyProjects() {
  return (dispatch) => {
    let p = authService.put(`/api/v1/thank/user/my/project`, {}).then(projects => ({ projects }));
    return dispatchPromise(p, REFRESH_MY_PROJECTS, dispatch);
  }
}

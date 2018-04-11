import authService from "./util/auth";
import { dispatchPromise, event } from "./util/promiseStates";
import { markMy } from "reducers/util/markMy";
import { dispatchPromiseWith } from "reducers/util/promiseStates";

export const PROJECT_GET = event("PROJECT_GET");
export const GET_SUPPORTED = event("GET_SUPPORTED");
export const GET_USER_PROJECTS = event("GET_USER_PROJECTS");

export const CREATE_PROJECT = event("CREATE_PROJECT");
export const DELETE_PROJECT = event("DELETE_PROJECT");
export const REFRESH_MY_PROJECTS = event("REFRESH_MY_PROJECTS");
export const UPDATE_MY_PROJECT = event("UPDATE_MY_PROJECT");
export const GET_OWNED_PROJECTS = event("GET_OWNED_PROJECTS");
export const REFRESH_PROJECT_FEED = event("REFRESH_PROJECT_FEED");

export const getProject = (id) => (dispatch) => {
  let p = fetch(`/api/v1/thank/project/${id}`).then(res => res.json())
  dispatchPromiseWith(p, PROJECT_GET, id, dispatch)
};

export function getSupportedByMe() {
  return (dispatch) => {
    let p = authService.get(`/api/v1/thank/user/my/supported`).then(projects => ({ id: "my", projects: markMy(projects) }));;
    return dispatchPromise(p, GET_SUPPORTED, dispatch)
  }
}

export function getProjectsByUser(user) {
  return (dispatch) => {
    let p = authService.get(`/api/v1/thank/user/${user}/project`).then(projects => ({ id: user, projects: markMy(projects) }));
    return dispatchPromise(p, GET_USER_PROJECTS, dispatch);
  }
}

export function updateProject(project) {
  return (dispatch) => {
    let p = authService.put(`/api/v1/thank/project/${project._id}`, project).then(markMy);
    return dispatchPromise(p, UPDATE_MY_PROJECT, dispatch);
  }
}

export function refreshProjectFeed(project) {
  return (dispatch) => {
    let p = authService.get(`/api/v1/thank/project/${project}/feed`).then(posts => ({ id: project, posts: markMy(posts) }));
    return dispatchPromise(p, REFRESH_PROJECT_FEED, dispatch);
  }
}

export function getOwnedProjects() {
  return (dispatch) => {
    let p = authService.get(`/api/v1/thank/user/my/owned`);
    return dispatchPromise(p, GET_OWNED_PROJECTS, dispatch);
  }
}

export function refreshMyProjects() {
  return (dispatch) => {
    let p = authService.put(`/api/v1/thank/user/my/project`, {}).then(projects => ({ projects: markMy(projects) }));
    return dispatchPromise(p, REFRESH_MY_PROJECTS, dispatch);
  }
}

export function createProject(project) {
  return (dispatch) => {
    let p = authService.post(`/api/v1/thank/project`, project).then(markMy);
    return dispatchPromise(p, CREATE_PROJECT, dispatch);
  }
}

export function deleteProject(project) {
  return (dispatch) => {
    let p = authService.remove(`/api/v1/thank/project/${project._id}`).then(() => markMy(project));
    return dispatchPromise(p, DELETE_PROJECT, dispatch);
  }
}

import authService from "./util/auth";
import { dispatchPromise, event } from "./util/promiseStates";
import { markMy } from "reducers/util/markMy";

export const PROJECT_GET = event("PROJECT_GET");
export const GET_SUPPORTED = event("GET_SUPPORTED");
export const GET_USER_PROJECTS = event("GET_USER_PROJECTS");

export const CREATE_PROJECT = event("CREATE_PROJECT");
export const DELETE_PROJECT = event("DELETE_PROJECT");
export const REFRESH_MY_PROJECTS = event("REFRESH_MY_PROJECTS");
export const UPDATE_MY_PROJECT = event("UPDATE_MY_PROJECT");
export const ENRICH_PROJECT = event("ENRICH_PROJECT");
export const GET_OWNED_PROJECTS = event("GET_OWNED_PROJECTS");
export const REFRESH_PROJECT_FEED = event("REFRESH_PROJECT_FEED");

export const getProject = PROJECT_GET.getById("/api/v1/thank/project/$id");

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

export function enrichProject(url) {
  return (dispatch) => {
    let p = authService.get(`/api/v1/thank/enrich?url=${url}`);
    return dispatchPromise(p, ENRICH_PROJECT, dispatch);
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

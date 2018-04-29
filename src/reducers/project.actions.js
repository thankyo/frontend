import authService from "./util/auth";
import { dispatchPromise, event } from "./util/promiseStates";
import { markMy } from "reducers/util/markMy";
import { dispatchPromiseWith } from "reducers/util/promiseStates";
import { goToProject, goToProjectInstallation } from "reducers/navigation.actions";

export const PROJECT_GET_SUPPORTED = event("PROJECT_GET_SUPPORTED");
export const PROJECT_GET_BY_USER = event("PROJECT_GET_BY_USER");

export const PROJECT_GET = event("PROJECT_GET");
export const PROJECT_CREATE = event("PROJECT_CREATE");
export const PROJECT_DELETE = event("PROJECT_DELETE");
export const PROJECT_UPDATE = event("PROJECT_UPDATE");

export const PROJECT_OWNERSHIP_REFRESH = event("PROJECT_OWNERSHIP_REFRESH");

export const PROJECT_OWNERSHIP_DIBS = event("PROJECT_OWNERSHIP_DIBS");
export const PROJECT_OWNERSHIP_DELETE = event("PROJECT_OWNERSHIP_DELETE");
export const PROJECT_OWNERSHIP_GET = event("PROJECT_OWNERSHIP_GET");

export const PROJECT_FEED_REFRESH = event("PROJECT_FEED_REFRESH");

export const getProject = (id) => (dispatch) => {
  let p = fetch(`/api/v1/thank/project/${id}`).then(res => res.json());
  dispatchPromiseWith(p, PROJECT_GET, id, dispatch)
};

export function getSupportedByMe() {
  return (dispatch) => {
    let p = authService.get(`/api/v1/thank/user/my/supported`).then(projects => ({ id: "my", projects: markMy(projects) }));;
    return dispatchPromise(p, PROJECT_GET_SUPPORTED, dispatch)
  }
}

export function getProjectsByUser(user) {
  return (dispatch) => {
    let p = authService.get(`/api/v1/thank/user/${user}/project`).then(projects => ({ id: user, projects: markMy(projects) }));
    return dispatchPromise(p, PROJECT_GET_BY_USER, dispatch);
  }
}

export function updateProject(project) {
  return (dispatch) => {
    let p = authService.put(`/api/v1/thank/project/${project._id}`, project).then(markMy);
    return dispatchPromise(p, PROJECT_UPDATE, dispatch);
  }
}

export function projectDibs(form) {
  return (dispatch) => {
    if (form.url.trim().length === 0)
      return Promise.reject({ url: "Must not be empty" });
    let p = authService.post(`/api/v1/thank/user/my/owned/dibs`, form);
    return dispatchPromise(p, PROJECT_OWNERSHIP_DIBS, dispatch);
  }
}

export function projectByEmail(form) {
  return (dispatch) => {
    if (form.email.trim().length === 0) {
      return Promise.reject({ email: "Must not be empty" });
    }
    let p = authService.post(`/api/v1/thank/user/my/owned/email`, form);
    return dispatchPromise(p, PROJECT_OWNERSHIP_REFRESH, dispatch);
  }
}

export function refreshProjectFeed(project) {
  return (dispatch) => {
    let p = authService.get(`/api/v1/thank/project/${project}/feed`).then(posts => ({ id: project, posts: markMy(posts) }));
    return dispatchPromise(p, PROJECT_FEED_REFRESH, dispatch);
  }
}

export function getOwnedProjects() {
  return (dispatch) => {
    let p = authService.get(`/api/v1/thank/user/my/owned`);
    return dispatchPromise(p, PROJECT_OWNERSHIP_GET, dispatch);
  }
}

export function createProject(project) {
  return (dispatch) => {
    let p = authService.post(`/api/v1/thank/project`, project).then(markMy);
    return dispatchPromise(p, PROJECT_CREATE, dispatch).then(prj => dispatch(goToProject(prj)));
  }
}

export function refreshGoogle() {
  return (dispatch) => {
    let p = authService.post(`/api/v1/thank/refresh/google`, {});
    return dispatchPromise(p, PROJECT_OWNERSHIP_REFRESH, dispatch)
  }
}

export function refreshTumblr() {
  return (dispatch) => {
    let p = authService.post(`/api/v1/thank/refresh/tumblr`, {});
    return dispatchPromise(p, PROJECT_OWNERSHIP_REFRESH, dispatch)
  }
}

export function deleteProject(project) {
  return (dispatch) => {
    let p = authService.remove(`/api/v1/thank/project/${project._id}`).then(() => markMy(project));
    return dispatchPromise(p, PROJECT_DELETE, dispatch);
  }
}

export function deleteDibs(project) {
  return (dispatch) => {
    let p = authService.remove(`/api/v1/thank/user/my/owned/dibs`, { url: project.url });
    return dispatchPromise(p, PROJECT_OWNERSHIP_DELETE, dispatch);
  }
}

export function deleteOwnershipByEmail(project) {
  return (dispatch) => {
    let p = authService.remove(`/api/v1/thank/user/my/owned/email`, { email: project.email });
    return dispatchPromise(p, PROJECT_OWNERSHIP_DELETE, dispatch);
  }
}

export function reSendWHOISVerification(project) {
  return (dispatch) => {
    return authService.post(`/api/v1/thank/user/my/owned/dibs/verify`, { url: project.url });
  }
}

export function reSendEmailVerification(project) {
  return (dispatch) => {
    return authService.post(`/api/v1/thank/user/my/owned/email/verify`, { email: project.email });
  }
}

export function verifyOwnership(method, token) {
  return (dispatch) =>  {
    let p = authService.put(`/api/v1/thank/user/my/owned/${method}/verify`, { token });
    return dispatchPromise(p, PROJECT_OWNERSHIP_REFRESH, dispatch).then(() => dispatch(goToProjectInstallation));
  }
}
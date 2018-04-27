import { push } from "react-router-redux/actions"

export const goToAuth = () => (dispatch) => {
  return dispatch(push("/auth"));
};

export const goToForgotAuth = (dispatch) => {
  return dispatch(push("/auth/forgot/success"));
};

export const goToContributions = (dispatch) => {
  return dispatch(push("/contribution/my"));
};

export const goToProjectInstallation = (dispatch) => {
  return dispatch(push("/creator/my"))
};

export const goToProject = (project) => (dispatch) => {
  return dispatch(push(`/creator/my/project/${project._id}`))
};
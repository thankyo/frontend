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
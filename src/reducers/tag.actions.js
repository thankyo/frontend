import authService from './util/auth';
import { dispatchPromise } from './util/promiseStates';
import { action } from "./util/action";
import { reset } from "redux-form";

export const GET_USER_TAGS = "GET_USER_TAGS";
export const ADD_USER_TAG = "ADD_USER_TAG";
export const REMOVE_USER_TAG = "REMOVE_USER_TAG";
export const SAVE_USER_TAGS = "SAVE_USER_TAGS";

export function fetchUserTags(id) {
  return (dispatch) => {
    let req = new Request(`/api/v1/thank/${id}/tag`);
    let p = authService.signAndFetch(req).then(tags => ({ id, tags}));
    return dispatchPromise(p, GET_USER_TAGS, dispatch);
  }
}

export function addUserTag(id, tag) {
  return (dispatch) => {
    dispatch(action(ADD_USER_TAG, { id, tag }))
    dispatch(reset("tag"))
  }
}

export function removeUserTag(id, tag) {
  return (dispatch) => {
    dispatch(action(REMOVE_USER_TAG, { id, tag }))
  }
}

export function saveMyTags(id) {
  return (dispatch, getState) => {
    let { tag: { user } } = getState();
    let userTags = user[id];
    let req = new Request(
      `/api/v1/thank/${id}/tag`,
      {
        method: 'POST',
        body: JSON.stringify(userTags)
      }
    );
    let p = authService.signAndFetch(req).then(tags => ({ id, tags }));
    return dispatchPromise(p, SAVE_USER_TAGS, dispatch);
  }
}
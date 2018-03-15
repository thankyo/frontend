import { GET_USER, USER_DELETE_SOCIAL_CONNECTION } from "./user.actions";
import { asSingleReducer, loadingPromiseReducerDB } from "reducers/util/promiseStates";

function deleteSocialConnectionReducer(state, { type, payload }) {
  switch (type) {
    case USER_DELETE_SOCIAL_CONNECTION.fulfilled:
      let my = Object.assign({}, state.my, { data: payload });
      return Object.assign({}, state, { my });
    default:
      return state;
  }
}

export default asSingleReducer(loadingPromiseReducerDB(GET_USER), deleteSocialConnectionReducer);
import authService from "./auth";

export function dispatchPromise(p, event, dispatch) {
  dispatch({ type: `${event}.pending`, payload: {} });
  return p.then((res) => {
    dispatch({ type: `${event}.fulfilled`, payload: res });
    return res;
  }).catch((err) => {
    dispatch({ type: `${event}.rejected`, payload: err });
  })
}

export function promiseReducer(
  event,
  initialState = {},
  pending = (state, payload) => state,
  fulfilled = (state, payload) => payload,
  rejected = (state, payload) => state
) {
  return function (state = initialState, { type, payload }) {
    switch (type) {
      case `${event}.pending`:
        return pending(state, payload);
      case `${event}.fulfilled`:
        return fulfilled(state, payload);
      case `${event}.rejected`:
        return rejected(state, payload);
      default:
        return state;
    }
  };
}

export function promiseReducerDB(event, initialState = {}, id = "id") {
  return function (state = initialState, { type, payload }) {
    switch (type) {
      case `${event}.pending`:
        return state;
      case `${event}.fulfilled`:
        if (authService.isMy(payload[id])) {
          return Object.assign({}, state, { [payload[id]] : payload, my: payload });
        } else {
          return Object.assign({}, state, { [payload[id]]: payload });
        }
      case `${event}.rejected`:
        return state;
      default:
        return state;
    }
  };
}

export function combineReducersInSingle() {
  let reducers = Array.prototype.slice.call(arguments);
  return function (state, action) {
    return reducers.reduce(function (updState, reducer) {
      return reducer(updState, action);
    }, state);
  }
}
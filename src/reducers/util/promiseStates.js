import authService from "./auth";

export function event(name) {
  return {
    fulfilled: `${name}.fulfilled`,
    pending: `${name}.pending`,
    rejected: `${name}.rejected`
  }
}

export function dispatchPromise(p, event, dispatch) {
  dispatch({ type: event.pending, payload: {} });
  // return new Promise((resolve) => setTimeout(resolve, 30000))
  //   .then(() => p)
  return p.then((res) => {
      dispatch({ type: event.fulfilled, payload: res });
      return res;
    }).catch((err) => {
      dispatch({ type: event.rejected, payload: err });
    })
}

export function promiseReducer(
  event,
  initialState = {},
  pending = (state) => state,
  fulfilled = (state, payload) => payload,
  rejected = (state) => state
) {
  return function (state = initialState, { type, payload }) {
    switch (type) {
      case event.pending:
        return pending(state, payload);
      case event.fulfilled:
        return fulfilled(state, payload);
      case event.rejected:
        return rejected(state, payload);
      default:
        return state;
    }
  };
}

export function loadingPromiseReducer(event, initialState = {}) {
  return function (state = { data: initialState, isFetching: false }, { type, payload }) {
    switch (type) {
      case event.pending:
        return {
          ... state,
          isFetching: true
        };
      case event.fulfilled:
        return {
          data: payload,
          isFetching: false
        };
      case event.rejected:
        return {
          ... state,
          isFetching: false,
          isError: true,
          error: payload
        };
      default:
        return state;
    }
  };
}

export function promiseReducerDB(event) {
  return function (state = {}, { type, payload }) {
    switch (type) {
      case event.pending:
        return state;
      case event.fulfilled:
        if (authService.isMy(payload.id)) {
          return Object.assign({}, state, { [payload.id] : payload, my: payload });
        } else {
          return Object.assign({}, state, { [payload.id]: payload });
        }
      case event.rejected:
        return state;
      default:
        return state;
    }
  };
}

export function asSingleReducer() {
  let reducers = Array.prototype.slice.call(arguments);
  return function (state, action) {
    return reducers.reduce(function (updState, reducer) {
      return reducer(updState, action);
    }, state);
  }
}
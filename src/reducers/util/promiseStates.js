import authService from "./auth";

export function dispatchPromiseWith(p, event, id, dispatch) {
  dispatch({ type: event.pending, id, payload: {} });
  return p.then((res) => {
    dispatch({ type: event.fulfilled, id, payload: res });
    return res;
  }).catch((err) => {
    dispatch({ type: event.rejected, id, payload: err });
  })
}

export function event(name) {
  let event =  {
    fulfilled: `${name}.fulfilled`,
    pending: `${name}.pending`,
    rejected: `${name}.rejected`,
    getMy: (url) => () => event.getById(url)("my"),
    getById: (url) => (id) => (dispatch) => {
      let p = authService.get(url.replace("$id", id));
      return dispatchPromiseWith(p, event, id, dispatch);
    },
    putMy: (url) => (body) => event.putById(url)("my", body),
    putById: (url) => (id, body) => (dispatch) => {
      let p = authService.put(url.replace("$id", id), body);
      return dispatchPromiseWith(p, event, id, dispatch);
    },
    postMy: (url) => (body) => event.postById(url)("my", body),
    postById: (url) => (id, body) => (dispatch) => {
      let p = authService.post(url.replace("$id", id), body);
      return dispatchPromiseWith(p, event, id, dispatch);
    },
    removeMy: (url) => event.removeById(url)("my"),
    removeById: (url) => (id) => (dispatch) => {
      let p = authService.remove(url.replace("$id", id));
      return dispatchPromiseWith(p, event, id, dispatch);
    }
  };

  return event;
}

export function dispatchPromise(p, event, dispatch) {
  dispatch({ type: event.pending, payload: {} });
  return p.then((res) => {
      dispatch({ type: event.fulfilled, payload: res });
      return res;
    }).catch((err) => {
      dispatch({ type: event.rejected, payload: err });
      return Promise.reject(err);
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

export function loadingPromiseReducer(event, initialState = {}) {
  return function (state = { data: initialState, isFetching: true, isError: false }, { type, payload }) {
    switch (type) {
      case event.pending:
        return {
          ... state,
          isFetching: true
        };
      case event.fulfilled:
        return {
          data: payload,
          isFetching: false,
          isError: false
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

export function loadingPromiseReducerDB(event) {
  return function (state = { }, action) {
    switch (action.type) {
      case event.pending:
      case event.fulfilled:
      case event.rejected:
        let elState = loadingPromiseReducer(event)(state[action.id], action);
        return {
          ... state,
          [action.id]: elState
        };
      default:
        return state;
    }
  }

}

export function asSingleReducer() {
  let reducers = Array.prototype.slice.call(arguments);
  return function (state, action) {
    return reducers.reduce(function (updState, reducer) {
      return reducer(updState, action);
    }, state);
  }
}
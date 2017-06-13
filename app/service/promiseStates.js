export function dispatchPromise(p, event, dispatch) {
    dispatch({ type: `${event}.pending`, payload: {}});
    p.
    then((res) => dispatch({ type: `${event}.fulfilled`, payload: res })).
    catch((err) => dispatch({ type: `${event}.rejected`, payload: err }))
};

export function promiseReducer(event, initialState = {}, pending = (state, payload) => state, fulfilled = (state, payload) => payload, rejected = (state, payload) => state) {
    return function(state = initialState, { type, payload }) {
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
};

export function combineReducersInSingle() {
    let reducers = Array.prototype.slice.call(arguments);
    return function (state, action) {
        return reducers.reduce(function (updState, reducer) {
            let newState =  reducer(updState, action)
            return newState;
        }, state);
    }
}
import { SET_LIMIT, GET_LIMIT, DEC_LIMIT, INC_LIMIT, promiseReducer } from './limit.actions';

const initialState = {
    amount: 5,
    currency: "USD"
};

const success = (state, payload) => {
    return payload;
};

const pending = (state) => {
    return state;
};

const rejected = (state) => {
    return state;
};

function limitUpdate(state, { type }) {
    switch (type) {
        case INC_LIMIT: {
            let amount = state.amount + 5
            return Object.assign({}, state, {amount})
        }
        case DEC_LIMIT: {
            let amount = Math.max(5, state.amount - 5)
            return Object.assign({}, state, {amount})
        }
        default:
            return state;
    }
}

const setReducer = promiseReducer(initialState, SET_LIMIT, pending, success, rejected);
const getReducer = promiseReducer(initialState, GET_LIMIT, pending, success, rejected)

export default (state, action) => {
    let afterSetReducers = setReducer(state, action);
    let afterGetReducers = getReducer(afterSetReducers, action);
    return limitUpdate(afterGetReducers, action)
}
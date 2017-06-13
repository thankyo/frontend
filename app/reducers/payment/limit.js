import { SET_LIMIT, promiseReducer } from './limit.actions';

const initialState = {};

const success = (state, payload) => {
    return payload;
};

const pending = (state) => {
    return state;
};

const rejected = (state) => {
    return state;
};

export default promiseReducer(initialState, SET_LIMIT, pending, success, rejected)
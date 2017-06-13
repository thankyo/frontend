import { SET_LIMIT, GET_LIMIT, DEC_LIMIT, INC_LIMIT } from './limit.actions';
import { promiseReducer } from 'service/promiseStates';

const initialState = {
    amount: 10,
    currency: "USD"
};

function limitUpdate(state, { type }) {
    switch (type) {
        case INC_LIMIT: {
            let amount = state.amount + 5;
            return Object.assign({}, state, {amount})
        }
        case DEC_LIMIT: {
            let amount = Math.max(5, state.amount - 5);
            return Object.assign({}, state, {amount})
        }
        default:
            return state;
    }
}

const setReducer = promiseReducer(initialState, SET_LIMIT);
const getReducer = promiseReducer(initialState, GET_LIMIT)

export default (state, action) => {
    let afterSetReducers = setReducer(state, action);
    let afterGetReducers = getReducer(afterSetReducers, action);
    return limitUpdate(afterGetReducers, action)
}
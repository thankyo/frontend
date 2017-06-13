import { SET_LIMIT, GET_LIMIT, DEC_LIMIT, INC_LIMIT } from './limit.actions';
import { promiseReducer, combineReducersInSingle } from 'service/promiseStates';

const initialState = {
    amount: 10,
    currency: "USD"
};

function limitUpdate(state = initialState, { type }) {
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

const reducer = combineReducersInSingle(
    promiseReducer(SET_LIMIT, initialState),
    promiseReducer(GET_LIMIT, initialState),
    limitUpdate
);

export default reducer;

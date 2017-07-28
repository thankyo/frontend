import { SET_LIMIT, GET_LIMIT } from './limit.actions';
import { promiseReducer, combineReducersInSingle } from 'service/promiseStates';

const initialState = {
    amount: 10,
    currency: "USD"
};

const reducer = combineReducersInSingle(
    promiseReducer(SET_LIMIT, initialState),
    promiseReducer(GET_LIMIT, initialState)
);

export default reducer;

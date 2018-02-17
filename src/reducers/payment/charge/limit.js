import { GET_LIMIT, SET_LIMIT } from './limit.actions';
import { combineReducersInSingle, promiseReducer } from '../../util/promiseStates';

const DEFAULT_LIMIT_STATE = {
  amount: 0,
  currency: "USD"
};

const setLimitReducer = (state = DEFAULT_LIMIT_STATE, { type, payload }) => {
  switch (type) {
    case SET_LIMIT:
      return payload;
    default:
      return state;
  }
};

const limitReducer = combineReducersInSingle(
  promiseReducer(SET_LIMIT, DEFAULT_LIMIT_STATE),
  promiseReducer(GET_LIMIT, DEFAULT_LIMIT_STATE),
  setLimitReducer
);

export default limitReducer;

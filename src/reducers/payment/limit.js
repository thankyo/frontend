import { GET_LIMIT, SET_LIMIT } from './limit.actions';
import { combineReducersInSingle, promiseReducer } from '../util/promiseStates';

const initialState = {
  amount: 0,
  currency: "USD"
};

const setLimitReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LIMIT:
      return payload;
    default:
      return state;
  }
}

const reducer = combineReducersInSingle(
  promiseReducer(SET_LIMIT, initialState),
  promiseReducer(GET_LIMIT, initialState),
  setLimitReducer
);

export default reducer;

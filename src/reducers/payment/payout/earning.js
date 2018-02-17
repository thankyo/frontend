import { promiseReducer } from 'reducers/util/promiseStates';

import { GET_EARNINGS } from './earning.actions';

const DEFAULT_EARNINGS_STATE = {
  total: 0,
};

export default promiseReducer(GET_EARNINGS, DEFAULT_EARNINGS_STATE);

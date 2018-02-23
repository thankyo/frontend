import { loadingPromiseReducer } from 'reducers/util/promiseStates';

import { GET_EARNINGS } from './earning.actions';

export default loadingPromiseReducer(GET_EARNINGS);

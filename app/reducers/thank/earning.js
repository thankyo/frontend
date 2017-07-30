import { GET_EARNINGS } from './earning.actions';
import { promiseReducer } from '../../service/promiseStates';

const initialState = {
  total: 0,
};

export default promiseReducer(GET_EARNINGS, initialState);

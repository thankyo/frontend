import { GET_SUPPORTED } from './supported.actions';
import { promiseReducer } from '../util/promiseStates';

const initialState = [];

export default promiseReducer(GET_SUPPORTED, initialState);

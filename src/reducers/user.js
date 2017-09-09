import { promiseReducer } from "./util/promiseStates";
import { GET_USER } from "./user.actions";

const initialState = {};

export default promiseReducer(GET_USER, initialState);
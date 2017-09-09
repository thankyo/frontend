import { promiseReducerDB } from "./util/promiseStates";
import { GET_USER } from "./user.actions";

const initialState = {};

export default promiseReducerDB(GET_USER, initialState);
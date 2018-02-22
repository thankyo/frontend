import { promiseReducerDB } from "./util/promiseStates";
import { GET_USER } from "./user.actions";

export default promiseReducerDB(GET_USER);
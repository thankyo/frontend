import { GET_USER } from "./user.actions";
import { loadingPromiseReducerDB } from "reducers/util/promiseStates";

export default loadingPromiseReducerDB(GET_USER);
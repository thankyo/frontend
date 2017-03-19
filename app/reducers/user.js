import {USER_FETCH} from "./user.actions";
import {REQUESTED, FAILED, SUCCESS} from "./state";

const initialState = {};

export default function (users = initialState, {type, state, payload}) {
    switch (type) {
        case USER_FETCH:
            switch (state) {
                case REQUESTED:
                    return users
                case SUCCESS:
                    let user = payload
                    return Object.assign({}, users, {[user.id]: payload});
                case FAILED:
                    return Object.assign({}, users, payload);
                default:
                    users
            }
        default:
            return users
    }
}
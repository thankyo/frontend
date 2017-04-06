import {USER_REQUESTED, USER_SUCCESS, USER_FAILED} from "./user.actions";

const initialState = {};

export default function (users = initialState, {type, payload}) {
    switch (type) {
        case USER_REQUESTED:
            return users;
        case USER_SUCCESS:
            let user = payload;
            return Object.assign({}, users, {[user.id]: payload});
        case USER_FAILED:
            return Object.assign({}, users, payload);
        default:
            return users
    }
}
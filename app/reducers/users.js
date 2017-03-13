import { USER_FETCH_REQUESTED, USER_FETCH_SUCCESS, USER_FETCH_FAILED } from './users.actions';

const initialState = [];

export default function(users = initialState, { type, payload}) {
    switch (type) {
        case USER_FETCH_REQUESTED:
            return users;
        case USER_FETCH_SUCCESS:
            let user = payload
            return Object.assign({}, users, { [user.id]: payload });
        case USER_FETCH_FAILED:
            return Object.assign({}, users, payload);
        default:
            return users
    }
}
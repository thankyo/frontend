import { THANK_FETCH_REQUESTED, THANK_FETCH_SUCCESS, THANK_FETCH_FAILED } from './thanks.action';

const initialState = {};

export default function(users = initialState, { type, payload}) {
    switch (type) {
        case THANK_FETCH_REQUESTED:
            return users;
        case THANK_FETCH_SUCCESS:
            let user = payload
            return Object.assign({}, users, { [user.id]: payload });
        case THANK_FETCH_FAILED:
            return Object.assign({}, users, payload);
        default:
            return users
    }
}
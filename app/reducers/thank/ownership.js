import { OWNERSHIP_REQUESTED, OWNERSHIP_SUCCESS, OWNERSHIP_FAILED } from './ownership.actions';

const initialState = {};

export default function(ownership = initialState, { type, payload}) {
    switch (type) {
        case OWNERSHIP_REQUESTED:
            let userState = {
                isError: false,
                items: []
            };
            return Object.assign({}, ownership, { [payload.user] : userState });
        case OWNERSHIP_FAILED:
            let userError = {
                isLoading: false,
                isError: true,
                items: [],
                error: payload
            };
            return Object.assign({}, ownership, { [payload.user] : userError });
        case OWNERSHIP_SUCCESS:
            let { user, item } = payload;
            let items = ownership[user].items.splice();
            items.push(item)
            let updatedTransactions = Object.assign({}, ownership[user], { items });
            return Object.assign({}, ownership, { [user] : updatedTransactions });
        default:
            return ownership;
    }
}
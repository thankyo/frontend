import {VERIFICATION_LIST_SUCCESS, VERIFICATION_LIST_FAILED, VERIFICATION_LIST_REQUESTED, VERIFICATION_REMOVE_SUCCESS, VERIFICATION_CREATE_SUCCESS, VERIFICATION_CONFIRMATION_SUCCESS} from "./verification.actions";

const initialState = {};

export default function (verification = initialState, { type, payload }) {
    switch (type) {
        case VERIFICATION_LIST_REQUESTED: {
            let { user } = payload;
            let requested = {
                isError: false,
                items: []
            };
            return Object.assign({}, verification, {[user]: requested});
        }
        case VERIFICATION_LIST_FAILED: {
            let { user } = payload;
            let error = {
                isLoading: false,
                isError: true,
                items: [],
                error: payload
            };
            return Object.assign({}, verification, { [user] : error});
        }
        case VERIFICATION_LIST_SUCCESS: {
            let {user, items} = payload;
            let resources = Object.assign({}, verification[user], {items});
            return Object.assign({}, verification, {[user]: resources});
        }
        case VERIFICATION_CREATE_SUCCESS: {
            let { user, ownership } = payload;
            let items = verification[user].items.concat([ownership]);
            let resources = Object.assign({}, verification[user], { items });
            return Object.assign({}, verification, {[user]: resources});
        }
        case VERIFICATION_REMOVE_SUCCESS: {
            let {user, verID} = payload;
            let items = verification[user].items.filter((ver) => ver.id !== verID);
            let resources = Object.assign({}, verification[user], { items });
            return Object.assign({}, verification, {[user]: resources});
        }
        case VERIFICATION_CONFIRMATION_SUCCESS: {
            let {user, ver } = payload;
            let items = verification[user].items.map((item) => item.id === ver.id ? ver : item);
            let resources = Object.assign({}, verification[user], { items });
            return Object.assign({}, verification, {[user]: resources});
        }
        default: {
            return verification;
        }
    }
}
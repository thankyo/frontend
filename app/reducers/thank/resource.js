import {RESOURCE_REQUESTED, RESOURCE_SUCCESS, RESOURCE_FAILED} from "./resource.actions";

const initialState = {};
const empty = (user) => { return { id: user, owns: [],}; }

export default function (resources = initialState, {type, payload}) {
    switch (type) {
        case RESOURCE_REQUESTED: {
            let {user} = payload;
            return Object.assign({}, resources, {[user]: empty(user)});
        }
        case RESOURCE_SUCCESS: {
            let {user} = payload;
            return Object.assign({}, resources, {[user]: payload.resource});
        }
        case RESOURCE_FAILED: {
            let {user} = payload;
            return Object.assign({}, resources, {[user]: {error: payload.error}});
        }
        default:
            return resources;
    }
}
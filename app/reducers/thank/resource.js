import {RESOURCE_REQUESTED, RESOURCE_SUCCESS, RESOURCE_FAILED} from "./resource.actions";
import {RESOURCE_VERIFICATION_CANCEL_SUCCESS, RESOURCE_VERIFICATION_SUCCESS} from "./resource.actions";

const initialState = {};
const empty = (user) => { return { id: user, owns: [],}; }

export default function (resources = initialState, {type, payload}) {
    switch (type) {
        case RESOURCE_REQUESTED: {
            console.log('RESOURCE_REQUESTED');
            let {user} = payload;
            return Object.assign({}, resources, {[user]: empty(user)});
        }
        case RESOURCE_SUCCESS: {
            console.log('RESOURCE_SUCCESS');
            let {user, resource} = payload;
            return Object.assign({}, resources, {[user]: resource});
        }
        case RESOURCE_FAILED: {
            console.log('RESOURCE_FAILED');
            let {user, error} = payload;
            return Object.assign({}, resources, {[user]: { error }});
        }
        case RESOURCE_VERIFICATION_SUCCESS: {
            console.log('RESOURCE_VERIFICATION_SUCCESS');
            let {user, verification} = payload;
            let userRes = Object.assign({}, resources[user], { verification });
            return Object.assign({}, resources, {[user]: userRes});
        }
        case RESOURCE_VERIFICATION_CANCEL_SUCCESS: {
            console.log('RESOURCE_VERIFICATION_CANCEL_SUCCESS');
            let {user} = payload;
            let userRes = Object.assign({}, resources[user]);
            delete userRes.verification;
            return Object.assign({}, resources, {[user]: userRes});
        }
        default:
            return resources;
    }
}
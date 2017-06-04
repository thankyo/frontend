import {RESOURCE_REQUESTED, RESOURCE_SUCCESS, RESOURCE_FAILED} from "./resource.actions";
import {RESOURCE_VERIFICATION_CANCEL_SUCCESS, RESOURCE_VERIFICATION_SUCCESS} from "./resource.actions";

import {RESOURCE_CONFIRMATION_STARTED, RESOURCE_CONFIRMATION_FINISHED, RESOURCE_CONFIRMATION_ERROR} from './resource.actions';


const initialState = {};
const empty = (user) => { return { id: user, owns: [],}; }

function setVerificationStatus(resources, user, status) {
    let oldVer = resources[user].verification;
    let verification = Object.assign({}, oldVer, { status });
    let userRes = Object.assign({}, resources[user], { verification });
    return Object.assign({}, resources, {[user]: userRes});
}

export default function (resources = initialState, {type, payload}) {
    switch (type) {
        case RESOURCE_REQUESTED: {
            let {user} = payload;
            return Object.assign({}, resources, {[user]: empty(user)});
        }
        case RESOURCE_SUCCESS: {
            let {user, resource} = payload;
            return Object.assign({}, resources, {[user]: resource});
        }
        case RESOURCE_FAILED: {
            let {user, error} = payload;
            return Object.assign({}, resources, {[user]: { error }});
        }
        case RESOURCE_VERIFICATION_SUCCESS: {
            let {user, verification} = payload;
            let userRes = Object.assign({}, resources[user], { verification });
            return Object.assign({}, resources, {[user]: userRes});
        }
        case RESOURCE_VERIFICATION_CANCEL_SUCCESS: {
            let {user} = payload;
            let userRes = Object.assign({}, resources[user]);
            delete userRes.verification;
            return Object.assign({}, resources, {[user]: userRes});
        }
        case RESOURCE_CONFIRMATION_STARTED: {
            let { user } = payload;
            return setVerificationStatus(resources, user, 'Running');
        }
        case RESOURCE_CONFIRMATION_FINISHED: {
            let { user } = payload;
            return setVerificationStatus(resources, user, 'Finished');
        }
        case RESOURCE_CONFIRMATION_ERROR: {
            let { user } = payload;
            return setVerificationStatus(resources, user, 'Error');
        }
        default:
            return resources;
    }
}
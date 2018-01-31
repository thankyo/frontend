import authService from '../util/auth';
import {reset} from 'redux-form';

export const RESOURCE_REQUESTED   = "RESOURCE_REQUESTED";
export const RESOURCE_SUCCESS     = "RESOURCE_SUCCESS";
export const RESOURCE_FAILED      = "RESOURCE_FAILED";

function toAction(type, payload) {
    return {type, payload};
}

const resourceRequested = (user) => toAction(RESOURCE_REQUESTED, { user });
const resourceSuccess = (user, resource) => toAction(RESOURCE_SUCCESS, { user, resource });
const resourceFailed = (user, error) => toAction(RESOURCE_FAILED, { user, error });

export function getUserResources(user) {
    let req = new Request(`/api/v1/thank/${user}/resource`);
    return (dispatch) => {
        dispatch(resourceRequested(user));
        authService.
            signAndFetch(req).
            then((resource) => dispatch(resourceSuccess(user, resource))).
            catch((error) => resourceFailed(user, error))
    }
}

export const RESOURCE_VERIFICATION_REQUESTED = "RESOURCE_VERIFICATION_REQUESTED";
export const RESOURCE_VERIFICATION_SUCCESS = "RESOURCE_VERIFICATION_SUCCESS";
export const RESOURCE_VERIFICATION_FAILED = "RESOURCE_VERIFICATION_FAILED";

const verificationRequested = (user, resource) => toAction(RESOURCE_VERIFICATION_REQUESTED, { user, resource });
const verificationSuccess = (user, verification) => toAction(RESOURCE_VERIFICATION_SUCCESS, { user, verification });
const verificationFailed = (user, error) => toAction(RESOURCE_VERIFICATION_FAILED, { user, error});

export const verify = (user, resource) => (dispatch) => {
    dispatch(verificationRequested(user, resource));
    let req = new Request(`/api/v1/thank/${user}/resource/verification`, {
        method: "POST",
        body: JSON.stringify(resource),
    });
    authService.
        signAndFetch(req).
        then(verification => {
            dispatch(verificationSuccess(user, verification));
            dispatch(reset('verifyResource'));
        }).
        catch(error => dispatch(verificationFailed(user, error)))
};

export const RESOURCE_VERIFICATION_CANCEL_REQUESTED = "RESOURCE_VERIFICATION_CANCEL_REQUESTED";
export const RESOURCE_VERIFICATION_CANCEL_SUCCESS = "RESOURCE_VERIFICATION_CANCEL_SUCCESS";
export const RESOURCE_VERIFICATION_CANCEL_FAILED = "RESOURCE_VERIFICATION_CANCEL_FAILED";

const verificationCancelRequested = (user) => toAction(RESOURCE_VERIFICATION_CANCEL_REQUESTED, {user});
const verificationCancelSuccess = (user) => toAction(RESOURCE_VERIFICATION_CANCEL_SUCCESS, {user});
const verificationCancelFailed = (user, error) => toAction(RESOURCE_VERIFICATION_CANCEL_FAILED, {user, error});

export function cancelVerification(user) {
    return (dispatch) => {
        dispatch(verificationCancelRequested(user));
        let req = new Request(`/api/v1/thank/${user}/resource/verification`, {method: "DELETE"});
        authService.
            signAndFetch(req).
            then(removed => dispatch(verificationCancelSuccess(user))).
            catch(error => dispatch(verificationCancelFailed(user, error)))
    }
}

export const RESOURCE_CONFIRMATION_STARTED = "RESOURCE_CONFIRMATION_STARTED";
export const RESOURCE_CONFIRMATION_ERROR = "RESOURCE_CONFIRMATION_ERROR";
export const RESOURCE_CONFIRMATION_FINISHED = "RESOURCE_CONFIRMATION_FINISHED";

const confirmationRequested = (user) => toAction(RESOURCE_CONFIRMATION_STARTED, {user});
const confirmationSuccess = (user, verification) => toAction(RESOURCE_CONFIRMATION_FINISHED, {user, verification});
const confirmationError = (user, error) => toAction(RESOURCE_CONFIRMATION_ERROR, {user, error});

export function confirm(user) {
    return (dispatch) => {
        dispatch(confirmationRequested(user));
        let req = new Request(`/api/v1/thank/${user}/resource/verification`, {method: "PUT"});
        authService.
            signAndFetch(req).
            then(verification => dispatch(confirmationSuccess(user, verification))).
            catch(error => dispatch(confirmationError(user, error)))
    }
}


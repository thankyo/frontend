import authService from "service/auth";
import {reset} from 'redux-form';

export const VERIFICATION_CREATE_REQUESTED = "RESOURCE_VERIFICATION_REQUESTED";
export const VERIFICATION_CREATE_SUCCESS = "RESOURCE_VERIFICATION_SUCCESS";
export const VERIFICATION_CREATE_FAILED = "RESOURCE_VERIFICATION_FAILED";

function toAction(type, payload) {
    return {type, payload};
}

const createRequested = (user, ownership) => toAction(VERIFICATION_CREATE_REQUESTED, { user, ownership });
const createSuccess = (user, ownership) => toAction(VERIFICATION_CREATE_SUCCESS, { user, ownership });
const createFailed = (user, error) => toAction(VERIFICATION_CREATE_FAILED, { user, error});

export const create = (user, ownership) => (dispatch) => {
    dispatch(createRequested(user, ownership));
    let req = new Request(`/api/v1/thank/verification/${user}`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ownership),
    });
    authService.
        signAndFetch(req, dispatch).
        then(res => {
            dispatch(createSuccess(user, res));
            dispatch(reset('ownUrl'));
        }).
        catch(error => dispatch(createFailed(user, error)))
};

export const VERIFICATION_REMOVE_REQUESTED = "RESOURCE_VERIFICATION_CANCEL_REQUESTED";
export const VERIFICATION_REMOVE_SUCCESS = "RESOURCE_VERIFICATION_CANCEL_SUCCESS";
export const VERIFICATION_REMOVE_FAILED = "RESOURCE_VERIFICATION_CANCEL_FAILED";

const removeRequested = (user, verID) => toAction(VERIFICATION_REMOVE_REQUESTED, {user, verID});
const removeSuccess = (user, verID) => toAction(VERIFICATION_REMOVE_SUCCESS, {user, verID});
const removeFailed = (user, verID, error) => toAction(VERIFICATION_REMOVE_FAILED, {user, verID, error});

export function remove(user, verID) {
    return (dispatch) => {
        dispatch(removeRequested(user, verID));
        let req = new Request(`/api/v1/thank/verification/${user}/${verID}`, {method: "DELETE"});
        authService.signAndFetch(req, dispatch).then(removed => {
            let event = removed ? removeSuccess(user, verID) : removeFailed(user, verID, "Server error, our admins are looking into it");
            dispatch(event)
        }).
        catch(error => dispatch(removeFailed(user, verID, error)))
    }
}

export const VERIFICATION_LIST_REQUESTED = "VERIFICATION_LIST_REQUESTED";
export const VERIFICATION_LIST_SUCCESS = "VERIFICATION_LIST_SUCCESS";
export const VERIFICATION_LIST_FAILED = "VERIFICATION_LIST_FAILED";

const listRequested = (user) => toAction(VERIFICATION_LIST_REQUESTED, {user});
const listSuccess = (user, items) => toAction(VERIFICATION_LIST_SUCCESS, {user, items});
const listFailed = (user, error) => toAction(VERIFICATION_LIST_FAILED, {user, error});

export const list = (user) => (dispatch) => {
    dispatch(listRequested(user));
    let listReq = new Request(`/api/v1/thank/verification/${user}`);
    authService.
        signAndFetch(listReq, dispatch).
        then(list => {
            dispatch(listSuccess(user, list))
        }).
        catch(error => {
            dispatch(listFailed(user, error))
        })
};

export const VERIFICATION_CONFIRMATION_REQUESTED = "VERIFICATION_CONFIRMATION_REQUESTED";
export const VERIFICATION_CONFIRMATION_SUCCESS = "VERIFICATION_CONFIRMATION_SUCCESS";
export const VERIFICATION_CONFIRMATION_FAILED = "VERIFICATION_CONFIRMATION_FAILED";

const confirmationRequested = (user, verID) => toAction(VERIFICATION_CONFIRMATION_REQUESTED, {user, verID});
const confirmationSuccess = (user, ver) => toAction(VERIFICATION_CONFIRMATION_SUCCESS, {user, ver});
const confirmationFailed = (user, verID, error) => toAction(VERIFICATION_CONFIRMATION_FAILED, {user, verID, error});

export function verify(user, verID) {
    return (dispatch) => {
        dispatch(confirmationRequested(user, verID));
        let req = new Request(`/api/v1/thank/verification/${user}/${verID}`, {method: "PUT"});
        authService.signAndFetch(req, dispatch).then(verification => {
            dispatch(confirmationSuccess(user, verification))
        })//.catch(error => dispatch(confirmationFailed(user, verID, error)))
    }
}





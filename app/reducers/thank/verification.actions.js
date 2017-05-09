import authService from "../../service/auth";

export const VERIFICATION_CREATE_REQUESTED = "VERIFICATION_CREATE_REQUESTED";
export const VERIFICATION_CREATE_SUCCESS = "VERIFICATION_CREATE_SUCCESS";
export const VERIFICATION_CREATE_FAILED = "VERIFICATION_CREATE_FAILED";

function toAction(type, payload) {
    return {type, payload};
}

const createRequested = (ownership) => toAction(VERIFICATION_CREATE_REQUESTED, {ownership});
const createSuccess = (ownership) => toAction(VERIFICATION_CREATE_SUCCESS, {ownership});
const createFailed = (error) => toAction(VERIFICATION_CREATE_FAILED, {error});

export const create = (ownership) => (dispatch) => {
    dispatch(createRequested(ownership));
    let req = new Request(`/api/v1/thank/verification/my`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ownership),
    });
    authService.signAndFetch(req, dispatch).then(ownership => dispatch(createSuccess(ownership))).catch(error => dispatch(createFailed(error)))
}

export const VERIFICATION_REMOVE_REQUESTED = "VERIFICATION_REMOVE_REQUESTED";
export const VERIFICATION_REMOVE_SUCCESS = "VERIFICATION_REMOVE_SUCCESS";
export const VERIFICATION_REMOVE_FAILED = "VERIFICATION_REMOVE_FAILED";

const removeRequested = (user, verification) => toAction(VERIFICATION_REMOVE_REQUESTED, {user, verification});
const removeSuccess = (user, verification) => toAction(VERIFICATION_REMOVE_SUCCESS, {user, verification});
const removeFailed = (user, verification, error) => toAction(VERIFICATION_REMOVE_FAILED, {user, verification, error});

export function remove(user, verification) {
    return (dispatch) => {
        dispatch(removeRequested(ownership));
        let req = new Request(`/api/v1/thank/verification/${user}/${verification}`, {method: "DELETE"});
        authService.signAndFetch(req, dispatch).then(removed => {
            let event = removed ? removeSuccess(user, verification) : removeFailed(user, verification, "Server error, our admins are looking into it");
            dispatch(event)
        }).catch(error => dispatch(removeFailed(user, verification, error)))
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
    authService.signAndFetch(listReq, dispatch).then(list => dispatch(listSuccess(user, list)))//.catch(error => dispatch(listFailed(user, error)))
};




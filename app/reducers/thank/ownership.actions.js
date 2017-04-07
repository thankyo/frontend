import authService from '../../service/auth';

export const OWNERSHIP_REQUESTED   = "OWNERSHIP_REQUESTED";
export const OWNERSHIP_SUCCESS     = "OWNERSHIP_SUCCESS";
export const OWNERSHIP_FAILED      = "OWNERSHIP_FAILED";

function ownershipRequested(user) {
    return {
        type: OWNERSHIP_REQUESTED,
        payload: {
            user
        }
    }
}

function ownershipSuccess(user, item) {
    return {
        type: OWNERSHIP_SUCCESS,
        payload: {
            user,
            item
        }
    }
}

function ownershipFailed(error) {
    return {
        type: OWNERSHIP_FAILED,
        payload: { error }
    }
}

export function listOwnership(id) {
    return (dispatch) => {
        dispatch(ownershipRequested(id));
        authService.
            signAndStream(`/api/v1/thank/ownership/${id}`, dispatch, (ownership) => {
                dispatch(ownershipSuccess(id, ownership))
            })
    }
}

// OWN requests

export const OWN_REQUESTED = "OWN_REQUESTED";
export const OWN_SUCCESS = "OWN_SUCCESS";
export const OWN_FAILED = "OWN_FAILED";

function ownRequested(ownership) {
    return {
        type: OWN_REQUESTED,
        payload: {
            ownership
        }
    }
}

function ownSuccess(ownership) {
    return {
        type: OWN_SUCCESS,
        payload: {
            ownership
        }
    }
}

function ownFailed(error) {
    return {
        type: OWN_FAILED,
        payload: {
            error
        }
    }
}

export function own(ownership) {
    return (dispatch) => {
        dispatch(ownRequested(ownership));
        let req = new Request(`/api/v1/thank/ownership/my`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ownership),
        });
        authService.
            signAndFetch(req, dispatch).
            then(ownership => dispatch(ownSuccess(ownership))).
            catch(error => dispatch(ownFailed(error)))
    }
}
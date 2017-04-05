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

export function fetch(id) {
    return (dispatch) => {
        dispatch(ownershipRequested(id));
        authService.
            signAndStream(`/api/v1/thank/ownership/${id}`, dispatch, (ownership) => {
                dispatch(ownershipSuccess(id, ownership))
            }).catch((err) => dispatch(ownershipFailed(err)))
    }
}
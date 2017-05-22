import authService from 'service/auth';

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

function ownershipSuccess(user, ownership) {
    return {
        type: OWNERSHIP_SUCCESS,
        payload: {
            user,
            items: ownership
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
            signAndFetch(new Request(`/api/v1/thank/ownership/${id}`), dispatch).
            then((ownership) => dispatch(ownershipSuccess(id, ownership))).
            catch((err) => ownershipFailed(err))
    }
}


import authService from '../../service/auth';

export const VERIFICATION_REQUESTED = "VERIFICATION_REQUESTED";
export const VERIFICATION_SUCCESS = "VERIFICATION_SUCCESS";
export const VERIFICATION_FAILED = "VERIFICATION_FAILED";

function ownRequested(ownership) {
    return {
        type: VERIFICATION_REQUESTED,
        payload: {
            ownership
        }
    }
}

function ownSuccess(ownership) {
    return {
        type: VERIFICATION_SUCCESS,
        payload: {
            ownership
        }
    }
}

function ownFailed(error) {
    return {
        type: VERIFICATION_FAILED,
        payload: {
            error
        }
    }
}

export function verify(ownership) {
    return (dispatch) => {
        dispatch(ownRequested(ownership));
        let req = new Request(`/api/v1/thank/verification/my`, {
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
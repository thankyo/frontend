import authService from '../../service/auth';

export const THANK_REQUESTED = "THANK_REQUESTED";
export const THANK_FAILED = "THANK_FAILED";
export const THANK_SUCCESS = "THANK_SUCCESS";

function thankRequested(url) {
    return {
        type: THANK_REQUESTED,
        payload: { url }
    }
}

function thankSuccess(thank) {
    return {
        type: THANK_SUCCESS,
        payload: { thank }
    }
}

function thankFailed(error) {
    return {
        type: THANK_FAILED,
        payload: { error }
    }
}

export function thank(url) {
    return (dispatch) => {
        let normUrl = url.trim();
        if (normUrl.length == 0)
            return;
        dispatch(thankRequested(normUrl));
        authService.
            signAndFetch(new Request(`/api/v1/thank/${normUrl}`, { method: "PUT" }), dispatch).
            then(thank => dispatch(thankSuccess(thank))).
            catch((error) => dispatch(thankFailed(error)))
        
    }
}
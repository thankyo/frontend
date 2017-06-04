import authService from 'service/auth';

export const RESOURCE_REQUESTED   = "RESOURCE_REQUESTED";
export const RESOURCE_SUCCESS     = "RESOURCE_SUCCESS";
export const RESOURCE_FAILED      = "RESOURCE_FAILED";

function toAction(type, payload) {
    return {type, payload};
}

const resourceRequested = (user) => toAction(RESOURCE_REQUESTED, { user });
const resourceSuccess = (user, resource) => toAction(RESOURCE_SUCCESS, { user, resource });
const resourceFailed = (user, error) => toAction(RESOURCE_FAILED, { user, error });

export function get(user) {
    let req = new Request(`/api/v1/thank/resource/${user}`);
    return (dispatch) => {
        dispatch(resourceRequested(user));
        authService.
            signAndFetch(req, dispatch).
            then((resource) => dispatch(resourceSuccess(user, resource))).
            catch((error) => resourceFailed(user, error))
    }
}

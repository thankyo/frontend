import { LOGOUT, FACEBOOK_LOGIN } from "./auth.actions";
import authService from './util/auth';
import { promiseReducer, combineReducersInSingle } from './util/promiseStates';
import { combineReducers } from 'redux';

const authenticated = function(authenticated = authService.isAuthenticated(), { type, payload }) {
    switch (type) {
        case LOGOUT:
            authService.removeToken();
            return false;
        case `${FACEBOOK_LOGIN}.fulfilled`:
            authService.setToken(payload);
            return authService.isAuthenticated();
        default:
            return authenticated;
    }
};

export default combineReducers({
    token: promiseReducer(FACEBOOK_LOGIN, { token: authService.getToken() }),
    authenticated
});

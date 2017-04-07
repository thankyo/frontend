import { LOGIN_REQUESTED, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT } from "./auth.actions";
import authService from '../service/auth';

const anonymousState = {
    isAuthenticated: false
};

const authenticatedState = {
    isAuthenticated: true
};

export default function(auth = authService.isAuthenticated() ? authenticatedState : anonymousState, { type, payload}) {
    switch (type) {
        case LOGIN_REQUESTED:
            authService.removeToken();
            return Object.assign({}, auth, { isAuthenticated: false, error: payload.error });
        case LOGIN_SUCCESS:
            authService.setToken(payload.token);
            return Object.assign({}, auth, { isAuthenticated: true, token: payload.token });
        case LOGIN_FAILED:
            authService.removeToken();
            return Object.assign({}, auth, { isAuthenticated: false });
        case LOGOUT:
            authService.removeToken();
            return anonymousState;
        default:
            return auth;
    }
}
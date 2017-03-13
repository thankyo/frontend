import { LOGIN_REQUESTED, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from "./auth.actions";
import authService from '../service/auth';

const anonymousState = {
    isAuthenticated: false
};

const authenticatedState = {
    isAuthenticated: true
};

export default function(state = authService.isAuthenticated() ? authenticatedState : anonymousState, { type, payload}) {
    switch (type) {
        case LOGIN_ERROR:
            authService.removeToken();
            return Object.assign({}, state, { isAuthenticated: false, error: payload.error });
        case LOGIN_SUCCESS:
            authService.setToken(payload.token);
            return Object.assign({}, state, { isAuthenticated: true, token: payload.token });
        case LOGIN_REQUESTED:
            authService.removeToken();
            return Object.assign({}, state, { isAuthenticated: false });
        case LOGOUT:
            authService.removeToken();
            return anonymousState;
        default:
            return state;
    }
}
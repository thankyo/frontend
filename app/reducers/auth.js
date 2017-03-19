import { REQUESTED, FAILED, SUCCESS } from './state';
import { LOGIN, LOGOUT } from "./auth.actions";
import authService from '../service/auth';

const anonymousState = {
    isAuthenticated: false
};

const authenticatedState = {
    isAuthenticated: true
};

export default function(auth = authService.isAuthenticated() ? authenticatedState : anonymousState, { type, state, payload}) {
    switch (type) {
        case LOGIN:
            switch (state) {
                case REQUESTED:
                    authService.removeToken();
                    return Object.assign({}, auth, { isAuthenticated: false, error: payload.error });
                case SUCCESS:
                    authService.setToken(payload.token);
                    return Object.assign({}, auth, { isAuthenticated: true, token: payload.token });
                case FAILED:
                    authService.removeToken();
                    return Object.assign({}, auth, { isAuthenticated: false });
                default:
                    return auth
            }
        case LOGOUT:
            authService.removeToken();
            return anonymousState;
        default:
            return auth;
    }
}
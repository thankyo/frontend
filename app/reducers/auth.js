import { LOGIN_REQUESTED, LOGIN_SUCCESS, LOGIN_ERROR } from "./auth.actions";

const initialState = {
    isAuthenticated: false,
    provider: "none"
};

export default function(state = initialState, { type, payload}) {
    switch (type) {
        case LOGIN_ERROR:
            return Object.assign({}, state, { isAuthenticated: false, error: payload });
        case LOGIN_SUCCESS:
            return Object.assign({}, state, { isAuthenticated: true, token: payload });
        case LOGIN_REQUESTED:
            return Object.assign({}, state, { isAuthenticated: false, provider: payload.provider });
        default:
            return state;
    }
}
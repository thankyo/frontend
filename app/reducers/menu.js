import { LOCATION_CHANGE }  from 'react-router-redux';
import { MENU_ACTIVATE }    from './menu.actions.js';
import { LOGIN_SUCCESS, LOGOUT }    from './auth.actions';
import authService          from '../service/auth';

function createMenu(text, path) {
    return {
        text,
        path,
        active: false,
    };
}

const anonymousMenu = {
    items: [
        createMenu("Home", "/"),
        createMenu("Documentation", "/documentation"),
        createMenu("Join", "/join"),
    ]
};

const userMenu = {
    items: [
        createMenu("Dashboard", "/dashboard"),
        createMenu("Documentation", "/documentation"),
        createMenu("Leave", "/leave"),
    ]
};

function updateActive(state, path) {
    let items = state.items.slice().map((item) => Object.assign({}, item, { active: item.path === path }))
    return Object.assign({}, state, { active: false, items });
}


export default function(state = authService.isAuthenticated() ? userMenu : anonymousMenu, { type, payload }) {
    switch (type) {
        case LOCATION_CHANGE:
            return updateActive(state, payload.pathname);
        case MENU_ACTIVATE:
            let active = !state.active;
            return Object.assign({}, state, { active });
        case LOGIN_SUCCESS:
            return userMenu;
        case LOGOUT:
            return anonymousMenu;
        default:
            return state;
    }
}
import { LOCATION_CHANGE }  from 'react-router-redux';
import { MENU_ACTIVATE }    from './menu.actions.js';
import { LOGIN, LOGOUT }    from './auth.actions';
import {SUCCESS}            from './state';
import authService          from '../service/auth';

function createMenu(text, path) {
    return {
        text,
        path,
        active: false,
    };
}

const anonymousMenu = {
    enabled: false,
    items: [
    ]
};

const userMenu = {
    enabled: true,
    items: [
        createMenu("Dashboard", "/dashboard"),
        createMenu("Leave", "/leave"),
    ]
};

function updateActive(state, path) {
    let items = state.items.slice().map((item) => Object.assign({}, item, { active: item.path === path }))
    return Object.assign({}, state, { active: false, items });
}


export default function(menu = authService.isAuthenticated() ? userMenu : anonymousMenu, { type, state, payload }) {
    switch (type) {
        case LOCATION_CHANGE:
            return updateActive(menu, payload.pathname);
        case MENU_ACTIVATE:
            let active = !menu.active;
            return Object.assign({}, menu, { active });
        case LOGIN:
            switch (state) {
                case SUCCESS:
                    return userMenu
                default:
                    return menu;
            }
        case LOGOUT:
            return anonymousMenu;
        default:
            return menu;
    }
}
import { LOCATION_CHANGE }  from 'react-router-redux';
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
    return Object.assign({}, state, { items });
}


export default function(menu = authService.isAuthenticated() ? userMenu : anonymousMenu, { type, state, payload }) {
    switch (type) {
        case LOCATION_CHANGE:
            return updateActive(menu, payload.pathname);
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
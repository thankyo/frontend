import { LOCATION_CHANGE }  from 'react-router-redux';
import { MENU_ACTIVATE }    from '../reducers/menu.actions.js';
import { LOGIN_SUCCESS, LOGOUT }    from './auth.actions';
import authService          from '../service/auth';

function createMenu(text, path, icon) {
    return {
        text,
        path,
        icon,
        active: false
    };
}

const anonymousMenu = {
    active: false,
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


export default function(state = authService.isAuthenticated() ? userMenu : anonymousMenu, action) {
    switch (action.type) {
        case LOCATION_CHANGE:
            let path = action.payload.pathname;
            let items = state.items.slice().map((item) => Object.assign({}, item, { active: item.path === path }))
            return Object.assign({}, state, { active: false, items });
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
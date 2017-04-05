import { LOCATION_CHANGE }  from 'react-router-redux';
import { LOGIN, LOGOUT }    from './auth.actions';
import {SUCCESS}            from './state';
import authService          from '../service/auth';

function createMenu(text, pathname, icon) {
    return {
        text,
        pathname,
        icon,
        active: false,
    };
}

const anonymousMenu = {
    enabled: false,
    items: [],
    my: []
};

const userMenu = {
    enabled: true,
    items: [
        createMenu("Love", "/my/love", "fa fa-heart"),
        createMenu("Payment", "/my/payment", "fa fa-usd")
    ],
    my: [
        createMenu("Love", "/my/love", "fa fa-heart"),
        createMenu("Payment", "/my/payment", "fa fa-usd")
    ]
};

function updateActive(state, pathname) {
    let items = state.items.slice().map((item) => Object.assign({}, item, { active: item.pathname === pathname }))
    let my = state.my.slice().map((item) => Object.assign({}, item, { active: item.pathname === pathname }))
    return Object.assign({}, state, { items, my });
}


export default function(menu = authService.isAuthenticated() ? userMenu : anonymousMenu, { type, state, payload }) {
    switch (type) {
        case LOCATION_CHANGE:
            return updateActive(menu, payload.pathname);
        case LOGIN:
            switch (state) {
                case SUCCESS:
                    return userMenu;
                default:
                    return menu;
            }
        case LOGOUT:
            return anonymousMenu;
        default:
            return menu;
    }
}
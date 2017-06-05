import { LOCATION_CHANGE }  from 'react-router-redux';
import { LOGIN_SUCCESS, LOGOUT }    from './auth.actions';
import authService          from 'service/auth';

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
    items: [
        // createMenu("Contributor", "/", "fa fa-image"),
        // createMenu("Creator", "/creator", "fa fa-image"),
    ]
};

const userMenu = {
    enabled: true,
    items: [
        // createMenu("Love", "/my/love", "fa fa-heart"),
        // createMenu("Payment", "/my/payment", "fa fa-usd"),
        // createMenu("Own", "/my/own", "fa fa-usd"),
        createMenu("Integration", "/my/integration", "fa fa-plug"),
    ]
};

function updateActive(state, pathname) {
    let items = state.items.slice().map((item) => Object.assign({}, item, { active: item.pathname === pathname }))
    return Object.assign({}, state, { items });
}


export default function(menu = authService.isAuthenticated() ? userMenu : anonymousMenu, { type, payload }) {
    switch (type) {
        case LOCATION_CHANGE:
            return updateActive(menu, payload.pathname);
        case LOGIN_SUCCESS:
            return userMenu;
        case LOGOUT:
            return anonymousMenu;
        default:
            return menu;
    }
}
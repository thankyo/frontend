import { LOCATION_CHANGE }  from 'react-router-redux';
import { MENU_ACTIVATE }    from '../reducers/menu.actions.js';

function createMenu(text, path, icon) {
    return {
        text,
        path,
        icon,
        active: false
    };
}

const initialState = {
    active: false,
    items: [
        createMenu("Home", "/"),
        createMenu("Documentation", "/documentation"),
        createMenu("Join", "/join"),
    ]
};


export default function(state = initialState, action) {
    switch (action.type) {
        case LOCATION_CHANGE:
            let path = action.payload.pathname;
            let items = state.items.slice().map((item) => Object.assign({}, item, { active: item.path === path }))
            return Object.assign({}, state, { active: false, items });
        case MENU_ACTIVATE:
            let active = !state.active;
            return Object.assign({}, state, { active });
        default:
            return state;
    }
}
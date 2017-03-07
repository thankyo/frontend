import { LOCATION_CHANGE }  from 'react-router-redux';
import { MENU_ACTIVATE }    from '../reducers/menu.actions.js';

function createMenu(text, path, icon) {
    return {
        text,
        path,
        icon
    };
}

const initialState = {
    active: false,
    items: [
        createMenu("Home", "/", "fa fa-home"),
        createMenu("Documentation", "/documentation", "fa fa-documentation"),
        createMenu("Join", "/join", "fa fa-sing-in"),
    ]
};


export default function(state = initialState, action) {
    switch (action.type) {
        case LOCATION_CHANGE:
            let path = action.payload.pathname;
            let itemIndex = state.items.findIndex((item) => item.path === path);
            console.log(itemIndex);
            return state;
        case MENU_ACTIVATE:
            let nextState = Object.assign({}, state, { active: !state.active });
            console.log(`Here ${JSON.stringify(nextState)}`);
            return nextState;
        default:
            return state;
    }
}
import { LOCATION_CHANGE } from 'react-router-redux';
import { FACEBOOK_LOGIN, LOGOUT } from './auth.actions';
import authService from 'service/auth';

export const MODE_CHANGE = "MODE_CHANGE";

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
  modes: []
};

const DASHBOARD = createMenu("Dashboard", "/user/my", "fa fa-plug");
const PAYMENT = createMenu("Payment", "/user/my/payment", "fa fa-usd");
const INTEGRATION = createMenu("Integration", "/user/my/integration", "fa fa-plug");

const userMenu = {
  enabled: true,
  items: [DASHBOARD, PAYMENT],
  modes: [
    { name: "Supporter", icon: "fa fa-user-circle-o", isActive: true },
    { name: "Creator", icon: "fa fa-paint-brush" }
  ]
};

function updateActiveMode(state, name) {
  let items = name === "Supporter" ? [DASHBOARD, PAYMENT] : [DASHBOARD, INTEGRATION, PAYMENT];
  let modes = state.modes.slice().map((mode) => Object.assign({}, mode, { isActive: mode.name === name }))
  return Object.assign({}, state, { modes, items });
}

function updateActive(state, pathname) {
  let items = state.items.slice().map((item) => Object.assign({}, item, { active: item.pathname === pathname }))
  return Object.assign({}, state, { items });
}

export function setActive(name) {
  return (dispatch) => {
    dispatch({ type: MODE_CHANGE, payload: name })
  }
}

export default function (menu = authService.isAuthenticated() ? userMenu : anonymousMenu, { type, payload }) {
  switch (type) {
    case LOCATION_CHANGE:
      return updateActive(menu, payload.pathname);
    case MODE_CHANGE:
      return updateActiveMode(menu, payload);
    case `${FACEBOOK_LOGIN}.fulfilled`:
      return userMenu;
    case LOGOUT:
      return anonymousMenu;
    default:
      return menu;
  }
}
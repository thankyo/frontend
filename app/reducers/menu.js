import { browserHistory, Link } from 'react-router';
import { LOCATION_CHANGE } from 'react-router-redux';
import { FACEBOOK_LOGIN, LOGOUT } from './auth.actions';
import authService from './util/auth';

export const MODE_CHANGE = "MODE_CHANGE";

const SUPPORTER_MODE = "Supporter";
const CREATOR_MODE = "Creator";

function createMenu(text, pathname, icon) {
  return {
    text,
    pathname,
    icon,
    active: false,
  };
}

const CREATOR_DASHBOARD = createMenu("Dashboard", "/creator/my", "fa fa-plug");
const INTEGRATION = createMenu("Integration", "/creator/my/integration", "fa fa-plug");

const USER_DASHBOARD = createMenu("Dashboard", "/supporter/my", "fa fa-plug");
const PAYMENT = createMenu("Payment", "/supporter/my/payment", "fa fa-usd");

const anonymousMode = {
  home: "/",
  items: [],
  modes: []
};

const supporterMode = {
  home: "/supporter/my",
  items: [],
  modes: [
    { name: SUPPORTER_MODE, icon: "fa fa-user-circle-o", isActive: true},
    { name: CREATOR_MODE, icon: "fa fa-paint-brush", isActive: false }
  ]
};

const creatorMode = {
  home: "/creator/my",
  items: [],
  modes: [
    { name: SUPPORTER_MODE, icon: "fa fa-user-circle-o", isActive: false},
    { name: CREATOR_MODE, icon: "fa fa-paint-brush", isActive: true }
  ]
};

function updateActiveMode(name) {
    switch (name) {
      case SUPPORTER_MODE:
          return supporterMode;
          break;
      case CREATOR_MODE:
          return creatorMode;
          break;
      default:
          return anonymousMode;
          break;
    }
}

function updateActive(state, pathname) {
  let items = state.items.slice().map((item) => Object.assign({}, item, { active: item.pathname === pathname }));
  return Object.assign({}, state, { items });
}

export function setMode(name) {
  return (dispatch) => {
    let mode = updateActiveMode(name);
    browserHistory.push(mode.home);
    dispatch({ type: MODE_CHANGE, payload: { mode } });
  }
}

function initialize() {
  if (authService.isAuthenticated()) {
    if (window.location.pathname.startsWith("/supporter"))
      return supporterMode;
    else
      return creatorMode;
  } else {
    return anonymousMode;
  }
}

export default function (menu = initialize(), { type, payload }) {
  switch (type) {
    case LOCATION_CHANGE:
      return updateActive(menu, payload.pathname);
    case MODE_CHANGE:
      return payload.mode;
    case `${FACEBOOK_LOGIN}.fulfilled`:
      return supporterMode;
    case LOGOUT:
      return anonymousMode;
    default:
      return menu;
  }
}
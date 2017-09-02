import { LOCATION_CHANGE } from 'react-router-redux';
import { FACEBOOK_LOGIN, LOGOUT } from './auth.actions';
import authService from './util/auth';

const ANONYMOUS = [];

const USER = [
  { pathname: "/supporter/my", name: "Supporter", icon: "fa fa-user-circle-o" },
  { pathname: "/creator/my", name: "Creator", icon: "fa fa-paint-brush" }
];

function updateActive(state, pathname) {
  return state.map(link => {
    let isActive = link.pathname === pathname;
    return Object.assign({}, link, { isActive });
  });
}


function initialize() {
  if (authService.isAuthenticated()) {
    return USER;
  } else {
    return ANONYMOUS;
  }
}

export default function (menu = initialize(), { type, payload }) {
  switch (type) {
    case LOCATION_CHANGE:
      return updateActive(menu, payload.pathname);
    case `${FACEBOOK_LOGIN}.fulfilled`:
      return USER;
    case LOGOUT:
      return ANONYMOUS;
    default:
      return menu;
  }
}
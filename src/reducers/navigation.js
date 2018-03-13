import { combineReducers } from "redux";
import {LOCATION_CHANGE} from "react-router-redux";
import queryString from "query-string";

const LINKS = [
  { pathname: "/search", name: "Discover" },
  { pathname: "/dashboard/my", name: "Contributions" },
  { pathname: "/creator/my", name: "Projects" },
  { pathname: "/settings", name: "Settings" },
  { pathname: "/settings/limit", name: "Limits", isHiddenDesktop: true },
  { pathname: "/settings/charge", name: "Charge", isHiddenDesktop: true },
  { pathname: "/settings/payout", name: "Payout", isHiddenDesktop: true },
];

function linksReducer(state = LINKS, { type, payload }) {
  switch (type) {
    case LOCATION_CHANGE:
      window.scroll(0, 0);
      let { pathname } = payload;
      return LINKS.map(link => Object.assign({}, link, { isActive: pathname.startsWith(link.pathname) }));
  }
  return state;
}

function queryReducer(state = "", { type, payload }) {
  switch (type) {
    case (LOCATION_CHANGE):
      let { pathname, search } = payload;
      if (pathname === "/search" && search !== "") {
        return queryString.parse(search).query;
      }
      return state;
    default:
      return state;
  }
}

export default combineReducers({
  links: linksReducer,
  query: queryReducer
})
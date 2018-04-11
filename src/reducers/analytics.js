import {LOCATION_CHANGE} from "react-router-redux";
import { CREATE_PROJECT, DELETE_PROJECT } from "reducers/project.actions";
import { POST_SEARCH_BY_TAG } from "reducers/post/post.actions";
import queryString from "query-string";

function toEvent({ type, payload }) {
  switch (type) {
    case LOCATION_CHANGE:
      let { pathname } = payload;
      if (pathname === "/search")
        return undefined;
      return {
        hitType: 'pageview',
        page: pathname
      };
    case CREATE_PROJECT.fulfilled:
      return {
        hitType: 'event',
        eventCategory: 'Install',
        eventAction: 'finish',
        eventLabel: payload.url
      };
    case DELETE_PROJECT.fulfilled:
      return {
        hitType: 'event',
        eventCategory: 'Install',
        eventAction: 'remove',
        eventLabel: payload.url
      };
    case POST_SEARCH_BY_TAG.fulfilled:
      return {
        hitType: 'event',
        eventCategory: 'Search',
        eventAction: payload.length > 0 ? "success" : "failure",
        eventLabel: queryString.parse(location.search).query
      };
    default:
      return undefined;
  }
}

export default function analyticsReducer(state = [], action) {
  const event = toEvent(action);
  const isLocalhost = location.hostname === "localhost";
  if (event !== undefined) {
    if (ga && !isLocalhost) ga('send', event)
    return state.concat(event)
  } else {
    return state;
  }
}
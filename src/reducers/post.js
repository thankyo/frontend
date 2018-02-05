import { SEARCH_BY_PROJECT, SEARCH_BY_TAG } from "./search.actions";
import { LOVE_POST, SAVE_POST } from "./post.actions";


export default function postReducer(state = {}, { type, payload }) {
  switch (type) {
    case `${SEARCH_BY_PROJECT}.fulfilled`: {
      let { posts } = payload;
      let postToId = posts.reduce((agg, post) => {
        agg[post._id] = post;
        return agg;
      }, {});
      return Object.assign({}, state, postToId);
    }
    case `${SEARCH_BY_TAG}.fulfilled`: {
      let postToId = payload.reduce((agg, post) => {
        agg[post._id] = post;
        return agg;
      }, {});
      return Object.assign({}, state, postToId);
    }
    case `${SAVE_POST}.fulfilled`:
    case `${LOVE_POST}.fulfilled`:
      return Object.assign({}, state, { [payload._id]: payload });
    default:
      return state;
  }
}
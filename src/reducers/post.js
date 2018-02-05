import { SEARCH_BY_PROJECT, SEARCH_BY_TAG } from "./search.actions";
import { LOVE_POST, SAVE_POST, EDIT_POST } from "./post.actions";
import authService from "reducers/util/auth";

function markLoved(post) {
  let user = authService.getUser();
  post.isLoved = post.thank.supporters.indexOf(user) !== -1;
  post.isMy = post.project.user === user;
  return post;
}

export default function postReducer(stateMap = {}, { type, payload }) {
  switch (type) {
    case EDIT_POST:
      let id = payload;
      let post = Object.assign({}, stateMap[id], { isEdit: !stateMap[id].isEdit });
      return Object.assign({}, stateMap, { [id]: post });
    case `${SEARCH_BY_PROJECT}.fulfilled`: {
      let { posts } = payload;
      posts.forEach(markLoved);
      let postToId = posts.reduce((agg, post) => {
        agg[post._id] = markLoved(post);
        return agg;
      }, {});
      return Object.assign({}, stateMap, postToId);
    }
    case `${SEARCH_BY_TAG}.fulfilled`: {
      let postToId = payload.reduce((agg, post) => {
        agg[post._id] = markLoved(post);
        return agg;
      }, {});
      return Object.assign({}, stateMap, postToId);
    }
    case `${SAVE_POST}.fulfilled`:
    case `${LOVE_POST}.fulfilled`:
      return Object.assign({}, stateMap, { [payload._id]: markLoved(payload) });
    default:
      return stateMap;
  }
}
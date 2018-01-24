import { GET_USER_TAGS, REMOVE_USER_TAG, SAVE_USER_TAGS } from "./tag.actions";

const INITIAL_STATE = { user: {} };

export default function (state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case `${SAVE_USER_TAGS}.fulfilled`: {
      let { user } = state;

      let { id, tags } = payload;
      if (!user[id]) {
        user[id] = []
      }
      let userWithTag = Object.assign({}, user, { [id]: user[id].concat(tags) });

      return Object.assign({}, state, { user: userWithTag });
    }
    case REMOVE_USER_TAG: {
      let { user } = state;

      let { id, tag } = payload;
      if (!user[id]) {
        user[id] = []
      }
      let userWithoutTag = Object.assign({}, user, { [id]: user[id].filter(t => t !== tag) });

      return Object.assign({}, state, { user: userWithoutTag });
    }
    case `${GET_USER_TAGS}.fulfilled`: {
      let { user } = state;

      let { id, tags } = payload;
      if (!user[id]) {
        user[id] = []
      }
      let userWithTag = Object.assign({}, user, { [id]: tags });

      return Object.assign({}, state, { user: userWithTag });
    }
    default:
      return state;
  }
}
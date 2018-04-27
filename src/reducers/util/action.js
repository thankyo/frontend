import { bindActionCreators } from 'redux';

export function action(type, payload) {
  return { type, payload };
}

export const bindToActions = (actions) => (dispatch) => bindActionCreators(actions, dispatch);


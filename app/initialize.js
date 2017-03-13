import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(reducers(), composeWithDevTools( applyMiddleware(thunk) ));

import { checkAuth } from "./reducers/auth.actions";
store.dispatch(checkAuth);

import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
const history = syncHistoryWithStore(browserHistory, store);

import React from 'react';
import ReactDOM from 'react-dom';
import Routes        from './route';
import { Provider } from 'react-redux';
const load = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Routes history={history}/>
    </Provider>,
    document.querySelector('#app')
  );
};

if (document.readyState !== 'complete') {
  document.addEventListener('DOMContentLoaded', load);
} else {
  load();
}

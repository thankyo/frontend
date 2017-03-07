import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import MainApp        from './route';

import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
const reducers = combineReducers(
    { routing: routerReducer }
);
const store = createStore(reducers, composeWithDevTools());

const history = syncHistoryWithStore(browserHistory, store);

const load = () => {
  ReactDOM.render(
    <Provider store={store}>
      <MainApp history={history}/>
    </Provider>,
    document.querySelector('#app')
  );
};

if (document.readyState !== 'complete') {
  document.addEventListener('DOMContentLoaded', load);
} else {
  load();
}

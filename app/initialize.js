import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';

import MainApp        from './route';

import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

import reducers from './reducers';
const store = createStore(reducers(), composeWithDevTools( applyMiddleware(sagaMiddleware) ));

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

import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import App            from 'components/App';
import Documentation  from 'components/documentation/Documentation';
import Join           from 'components/join/Join';

import TermsOfUse     from 'components/legal/TermsOfUse';
import PrivacyPolicy  from 'components/legal/PrivacyPolicy';

const reducers = combineReducers(
    { routing: routerReducer }
);
const store = createStore(reducers);

const history = syncHistoryWithStore(browserHistory, store)

const load = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}/>
        <Route path="/documentation" component={ Documentation }/>
        <Route path="/join" component={ Join }/>
        <Route path="/legal/terms" component={ TermsOfUse } />
        <Route path="/legal/privacy" component={ PrivacyPolicy } />
      </Router>
    </Provider>,
    document.querySelector('#app')
  );
};

if (document.readyState !== 'complete') {
  document.addEventListener('DOMContentLoaded', load);
} else {
  load();
}

import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import reducers from "reducers";
import MainApp from "./navigation/route";

import conf from "conf";

const store = createStore(reducers(), composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(browserHistory, store);

Object.isObject = function (obj) {
  return typeof obj === 'object' && obj !== null
};

let loaded = new Promise((resolve, reject) => {
  if (document.readyState !== 'complete') {
    resolve();
  } else {
    document.addEventListener('DOMContentLoaded', resolve);
  }
});


Promise.all([ loaded, conf(history, store) ]).then(() => {
  ReactDOM.render(
    <Provider store={store}>
        <MainApp history={history}/>
    </Provider>,
    document.querySelector('#app')
  );
});

import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import conf from "./conf";
import reducers from "./reducers";
import MainApp from "./navigation/route";

const store = createStore(reducers(), composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(browserHistory, store);

let loaded = new Promise((resolve) => {
  if (document.readyState !== 'complete') {
    resolve();
  } else {
    document.addEventListener('DOMContentLoaded', resolve);
  }
});

if (process.env.NODE_ENV === 'production') {
  const runtime = require('offline-plugin/runtime');

  runtime.install({
    onUpdateReady() {
      runtime.applyUpdate();
    },
    onUpdated() {
      window.location.reload();
    },
  });
}

Promise.all([ loaded, conf(history, store) ]).then(() => {
  ReactDOM.render(
    <Provider store={store}>
        <MainApp history={history}/>
    </Provider>,
    document.querySelector('#app')
  );
});

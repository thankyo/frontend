import "./styles/styles.sass";

import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import React from "react";
import ReactDOM from "react-dom";
import createHistory from 'history/createBrowserHistory';
import { Provider } from "react-redux";
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux'

import conf from "./conf";
import reducers from "./reducers";
import MainApp from "./navigation/route";

const history = createHistory();
const store = createStore(reducers(), composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk)));

let loaded = new Promise((resolve) => {
  if (document.readyState === 'complete') {
    resolve();
  } else {
    window.onload = resolve;
  }
});


Promise.all([ loaded, conf() ]).then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MainApp/>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
  );
});

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
import auth from "reducers/util/auth";

const history = createHistory();
const store = createStore(reducers(), composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk)));

let loaded = new Promise((resolve) => {
  if (document.readyState === 'complete' || document.readyState === "interactive") {
    resolve();
  } else {
    window.onload = resolve;
  }
});

// let isAuthenticated = auth.restoreAuthentication()
// if (isAuthenticated) {
//   if (location.pathname === "/") {
//     history.push("/dashboard/my");
//   }
// } else if (location.pathname !== "/" || location.pathname.startsWith("/auth")) {
//   history.push("/");
// }


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

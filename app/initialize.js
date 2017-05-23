import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { browserHistory } from "react-router";
import {syncHistoryWithStore} from "react-router-redux";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import reducers from "reducers";
import MainApp from "route";

import conf from "conf";

const store = createStore(reducers(), composeWithDevTools(applyMiddleware(thunk)));

const history = syncHistoryWithStore(browserHistory, store);
const load = () => {
    ReactDOM.render(
        <Provider store={store}>
            <MainApp history={history}/>
        </Provider>,
        document.querySelector('#app')
    );
};

Object.isObject = function (obj) {
    return typeof obj === 'object' && obj !== null
};

if (document.readyState !== 'complete') {
    document.addEventListener('DOMContentLoaded', load);
} else {
    load();
}

// Initialize analytics
conf(history, store);

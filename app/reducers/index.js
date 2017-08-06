import menu from "./menu";
import user from "./user";
import auth from "./auth";
import payment from './payment';
import thank from "./thank";
import lastAction from './lastAction';
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import {LOGOUT} from './auth.actions';

function cleanOnLogout(reducer) {
    return function (state, action) {
        switch (action.type) {
            case LOGOUT:
                return reducer({}, action);
            default:
                return reducer(state, action);
        }
    }
};


export default function(){
    return combineReducers(
        {
            routing,
            auth,
            menu,
            user: cleanOnLogout(user),
            payment: cleanOnLogout(payment),
            thank: cleanOnLogout(thank),
            form: cleanOnLogout(formReducer),
            lastAction,
        }
    );
}
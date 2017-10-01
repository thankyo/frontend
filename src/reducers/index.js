import menu from "./menu";
import user from "./user";
import payment from './payment';
import thank from "./thank";
import lastAction from './lastAction';
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

export default function(){
    return combineReducers(
        {
            routing,
            menu,
            user: user,
            payment: payment,
            thank: thank,
            form: formReducer,
            lastAction,
        }
    );
}
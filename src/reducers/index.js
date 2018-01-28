import user from "./user";
import payment from './payment';
import search from "./search";
import thank from "./thank";
import tag from "./tag";
import lastAction from './lastAction';
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

export default function(){
    return combineReducers(
        {
            routing,
            user,
            tag,
            payment,
            search,
            thank,
            form: formReducer,
            lastAction,
        }
    );
}
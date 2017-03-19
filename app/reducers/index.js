import menu from "./menu";
import user from "./user";
import auth from "./auth";
import thankTransaction from "./thankTransaction";
import braintree from "./braintree";
import thank from "./thank";
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

export default function(){
    return combineReducers(
        {
            routing,
            auth,
            menu,
            user,
            thankTransaction,
            thank,
            braintree
        }
    );
}
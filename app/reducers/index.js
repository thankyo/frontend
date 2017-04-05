import menu from "./menu";
import user from "./user";
import auth from "./auth";
import thankTransaction from "./thank/thankTransaction";
import payment from './payment';
import ownership from "./thank/thank";
import thank from "./thank/ownership";
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
            payment,
            thank,
            ownership
        }
    );
}
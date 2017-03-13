import menu from "./menu";
import user from "./user";
import auth from "./auth";
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

export default function(){
    return combineReducers(
        {
            routing,
            auth,
            menu,
            user
        }
    );
}
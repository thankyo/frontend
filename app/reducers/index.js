import menu from "./menu";
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

export default function(){
    return combineReducers(
        {
            routing,
            menu
        }
    );
}
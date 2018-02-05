import user from "./user";
import payment from './payment';
import search from "./search";
import thank from "./thank";
import tag from "./tag";
import navigation from "./navigation";
import project from "./project";
import post from "./post";
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

export default function () {
  return combineReducers(
    {
      routing,
      navigation,
      user,
      tag,
      payment,
      search,
      post,
      thank,
      project,
      form: formReducer
    }
  );
}
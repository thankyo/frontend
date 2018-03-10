import user from "./user";
import payment from './payment';
import navigation from "./navigation";
import project from "./project";
import post from "./post";
import auth from "./auth";
import statistic from "./statistic";

import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

export default function () {
  return combineReducers(
    {
      routing,
      form: formReducer,
      auth,
      navigation,
      user,
      payment,
      post,
      project,
      statistic
    }
  );
}
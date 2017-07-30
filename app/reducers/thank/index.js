import transaction from './transaction';
import url from './url';
import resource from './resource';
import { combineReducers } from 'redux';
import earning from "./earning";

export default combineReducers(
  {
    transaction,
    resource,
    url,
    earning,
  }
);

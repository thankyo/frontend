import { combineReducers } from 'redux';
import transaction from './transaction';
import resource from './resource';
import earning from "./earning";
import supported from './supported';

export default combineReducers(
  {
    transaction,
    resource,
    earning,
    supported,
  }
);

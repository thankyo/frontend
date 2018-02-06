import { combineReducers } from 'redux';
import transaction from './transaction';
import resource from './resource';
import earning from "./earning";

export default combineReducers(
  {
    transaction,
    resource,
    earning,
  }
);

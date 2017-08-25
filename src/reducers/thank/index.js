import { combineReducers } from 'redux';

import transaction from './transaction';
import url from './url';
import resource from './resource';
import earning from "./earning";
import supported from './supported';

export default combineReducers(
  {
    transaction,
    resource,
    url,
    earning,
    supported,
  }
);

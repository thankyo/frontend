import { combineReducers } from 'redux';

import account from './account';
import earning from "./earning";
import transaction from "./transaction";

export default combineReducers(
  {
    account,
    earning,
    transaction,
  }
);

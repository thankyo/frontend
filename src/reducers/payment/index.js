import { combineReducers } from 'redux';

import limit from './limit';
import chargeAccount from './chargeAccount';
import payoutAccount from './payoutAccount';

import earning from "./earning";
import transaction from "./transaction";

export default combineReducers(
  {
    chargeAccount,
    payoutAccount,
    limit,
    earning,
    transaction,
  }
);

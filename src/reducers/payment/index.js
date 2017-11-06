import transaction from './transaction';
import limit from './limit';
import chargeAccount from './chargeAccount';
import payoutAccount from './payoutAccount';
import { combineReducers } from 'redux';

export default combineReducers(
  {
    transaction,
    chargeAccount,
    payoutAccount,
    limit
  }
);

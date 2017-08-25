import transaction from './transaction';
import limit from './limit';
import chargeAccount from './chargeAccount';
import { combineReducers } from 'redux';

export default combineReducers(
    {
        transaction,
        chargeAccount,
        limit
    }
);

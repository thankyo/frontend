import transaction from './transaction';
import braintree   from './braintree';
import { combineReducers } from 'redux';

export default combineReducers(
    {
        transaction,
        braintree
    }
);

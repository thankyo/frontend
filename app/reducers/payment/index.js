import transaction from './transaction';
import braintree   from './braintree';
import withdraw    from './withdraw';
import { combineReducers } from 'redux';

export default combineReducers(
    {
        transaction,
        braintree,
        withdraw
    }
);

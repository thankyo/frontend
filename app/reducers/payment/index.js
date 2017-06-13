import transaction from './transaction';
import limit from './limit';
import stripe from './stripe';
import { combineReducers } from 'redux';

export default combineReducers(
    {
        transaction,
        stripe,
        limit
    }
);

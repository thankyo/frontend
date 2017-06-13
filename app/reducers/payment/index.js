import transaction from './transaction';
import limit from './limit';
import { combineReducers } from 'redux';

export default combineReducers(
    {
        transaction,
        limit
    }
);

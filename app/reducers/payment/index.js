import transaction from './transaction';
import withdraw    from './withdraw';
import { combineReducers } from 'redux';

export default combineReducers(
    {
        transaction,
        withdraw
    }
);

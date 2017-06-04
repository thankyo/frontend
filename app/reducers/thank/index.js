import transaction from './transaction';
import url         from './url';
import resource     from './resource';
import { combineReducers } from 'redux';

export default combineReducers(
    {
        transaction,
        resource,
        url,
    }
);

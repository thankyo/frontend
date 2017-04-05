import transaction from './transaction';
import ownership   from './ownership';
import url         from './url';
import { combineReducers } from 'redux';

export default combineReducers(
    {
        transaction,
        ownership,
        url
    }
);

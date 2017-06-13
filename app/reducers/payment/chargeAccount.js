import { CHARGE_ACCOUNT_GET, CHARGE_ACCOUNT_SET } from './chargeAccount.actions';
import { promiseReducer, combineReducersInSingle } from 'service/promiseStates';

const initialState = {
    brand: "Visa",
    last4: "0000",
    type: "stripe"
};

export default combineReducersInSingle(
    promiseReducer(CHARGE_ACCOUNT_GET, initialState),
    promiseReducer(CHARGE_ACCOUNT_SET, initialState),
);
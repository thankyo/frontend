import { CHARGE_ACCOUNT_GET } from './chargeAccount.actions';
import { promiseReducer } from 'service/promiseStates';

const initialState = {
    brand: "Visa",
    last4: "0000",
    type: "stripe"
};

export default promiseReducer(CHARGE_ACCOUNT_GET, initialState);
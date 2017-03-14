import { PAYMENT_FETCH_REQUESTED, PAYMENT_FETCH_SUCCESS, PAYMENT_FETCH_FAILED } from './payment.action';

const initialState = {};

export default function(state = initialState, { type, id, payload}) {
    switch (type) {
        case PAYMENT_FETCH_REQUESTED:
            return state;
        case PAYMENT_FETCH_SUCCESS:
            let payment = payload;
            return Object.assign({}, state, { [payment.id]: payload });
        case PAYMENT_FETCH_FAILED:
            return Object.assign({}, state, payload);
        default:
            return state;
    }
}
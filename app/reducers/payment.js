import { PAYMENT_FETCH_REQUESTED, PAYMENT_FETCH_SUCCESS, PAYMENT_FETCH_FAILED } from './payment.action';

const initialState = {};

export default function(payments = initialState, { type, payload}) {
    switch (type) {
        case PAYMENT_FETCH_REQUESTED:
            return payments;
        case PAYMENT_FETCH_SUCCESS:
            let payment = payload;
            let id = payment.user;
            let existingPayments = payments[id] ? payments[id] : [];
            let updatedPayments = existingPayments.slice();
            updatedPayments.push(payment);
            return Object.assign({}, payments, { [id] : updatedPayments });
        case PAYMENT_FETCH_FAILED:
            return Object.assign({}, payments, payload);
        default:
            return payments;
    }
}
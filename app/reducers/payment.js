import { THANK_TRANSACTION_FETCH_REQUESTED, THANK_TRANSACTION_FETCH_SUCCESS, THANK_TRANSACTION_FETCH_FAILED } from './payment.action';

const initialState = {};

export default function(payments = initialState, { type, payload}) {
    switch (type) {
        case THANK_TRANSACTION_FETCH_REQUESTED:
            return payments;
        case THANK_TRANSACTION_FETCH_SUCCESS:
            let payment = payload;
            let id = payment.user;
            let existingPayments = payments[id] ? payments[id] : [];
            let updatedPayments = existingPayments.slice();
            updatedPayments.push(payment);
            return Object.assign({}, payments, { [id] : updatedPayments });
        case THANK_TRANSACTION_FETCH_FAILED:
            return Object.assign({}, payments, payload);
        default:
            return payments;
    }
}
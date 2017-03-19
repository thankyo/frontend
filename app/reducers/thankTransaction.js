import { THANK_TRANSACTION_FETCH } from './thankTransaction.actions';
import { REQUESTED, FAILED, SUCCESS } from './state';

const initialState = {};

export default function(thankTransaction = initialState, { type, state, payload}) {
    switch (type) {
        case THANK_TRANSACTION_FETCH:
            switch (state) {
                case REQUESTED:
                case FAILED:
                    return Object.assign({}, thankTransaction, payload);
                case SUCCESS:
                    let transaction = payload;
                    let id = transaction.user;
                    let existingPayments = thankTransaction[id] ? thankTransaction[id] : [];
                    let updatedPayments = existingPayments.slice();
                    updatedPayments.push(transaction);
                    return Object.assign({}, thankTransaction, { [id] : updatedPayments });
                default:
                    return thankTransaction;
            }
        default:
            return thankTransaction;
    }
}
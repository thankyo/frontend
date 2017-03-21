import { THANK_TRANSACTION_FETCH } from './thankTransaction.actions';
import { REQUESTED, FAILED, SUCCESS } from './state';

const initialState = {};

export default function(transactions = initialState, { type, state, payload}) {
    switch (type) {
        case THANK_TRANSACTION_FETCH:
            switch (state) {
                case REQUESTED:
                    return transactions;
                case FAILED:
                    return Object.assign({}, transactions, payload);
                case SUCCESS:
                    let transaction = payload;
                    let id = transaction.user;
                    let existingPayments = transactions[id] ? transactions[id] : [];
                    let updatedPayments = existingPayments.slice();
                    updatedPayments.push(transaction);
                    return Object.assign({}, transactions, { [id] : updatedPayments });
                default:
                    return transactions;
            }
        default:
            return transactions;
    }
}
import { PAYMENT_TRANSACTION_FETCH } from './paymentTransaction.actions';
import { REQUESTED, FAILED, SUCCESS } from './state';

const initialState = {};

export default function(transactions = initialState, { type, state, payload}) {
    switch (type) {
        case PAYMENT_TRANSACTION_FETCH:
            switch (state) {
                case REQUESTED:
                    return transactions;
                case FAILED:
                    return Object.assign({}, transactions, payload);
                case SUCCESS:
                    let transaction = payload;
                    let id = transaction.user;
                    let existingTransactions = transactions[id] ? transactions[id] : [];
                    let updatedTransactions = existingTransactions.slice();
                    updatedTransactions.push(transaction);
                    return Object.assign({}, transactions, { [id] : updatedTransactions });
                default:
                    return transactions;
            }
        default:
            return transactions;
    }
}
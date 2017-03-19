import { PAYMENT_TRANSACTION_FETCH } from './paymentTransaction.actions';
import { REQUESTED, FAILED, SUCCESS } from './state';

const initialState = {};

export default function(paymentTransaction = initialState, { type, state, payload}) {
    switch (type) {
        case PAYMENT_TRANSACTION_FETCH:
            switch (state) {
                case REQUESTED:
                case FAILED:
                    return Object.assign({}, paymentTransaction, payload);
                case SUCCESS:
                    let transaction = payload;
                    let id = transaction.user;
                    let existingTransactions = paymentTransaction[id] ? paymentTransaction[id] : [];
                    let updatedTransactions = existingTransactions.slice();
                    updatedTransactions.push(transaction);
                    return Object.assign({}, paymentTransaction, { [id] : updatedTransactions });
                default:
                    return paymentTransaction;
            }
        default:
            return paymentTransaction;
    }
}
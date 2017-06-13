import { PAYMENT_TRANSACTION_REQUESTED, PAYMENT_TRANSACTION_SUCCESS } from './transaction.actions';

const initialState = {};

function updateTransactions(transactions, payload) {
    let user = payload.user;
    let userTransactions = transactions[payload.user] ? transactions[payload.user] : {};
    let updatedTransactions = Object.assign({}, userTransactions, { [payload.id] : payload });
    return Object.assign({}, transactions, { [user] : updatedTransactions });
}

export default function(transactions = initialState, { type, payload }) {
    switch (type) {
        case PAYMENT_TRANSACTION_REQUESTED:
            return transactions;
        case PAYMENT_TRANSACTION_SUCCESS:
            return updateTransactions(transactions, payload);
        default:
            return transactions;
    }
}
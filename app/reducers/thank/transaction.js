import { THANK_TRANSACTION_REQUESTED, THANK_TRANSACTION_SUCCESS } from './transaction.actions';

const initialState = {};

export default function(transactions = initialState, { type, payload}) {
    switch (type) {
        case THANK_TRANSACTION_REQUESTED:
            return transactions;
        case THANK_TRANSACTION_SUCCESS:
            let user = payload.user;
            let userTransactions = transactions[payload.user] ? transactions[payload.user] : {};
            let updatedTransactions = Object.assign({}, userTransactions, { [payload.id] : payload });
            return Object.assign({}, transactions, { [user] : updatedTransactions });
        default:
            return transactions;
    }
}
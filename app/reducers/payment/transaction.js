import { PAYMENT_TRANSACTION_FETCH } from './transaction.actions';
import { WITHDRAW_SUCCESS } from './withdraw.actions';
import { REQUESTED, FAILED, SUCCESS } from '../state';

const initialState = {};

function updateTransactions(transactions, payload) {
    let user = payload.user;
    let userTransactions = transactions[payload.user] ? transactions[payload.user] : {};
    let updatedTransactions = Object.assign({}, userTransactions, { [payload.id] : payload });
    return Object.assign({}, transactions, { [user] : updatedTransactions });
}

export default function(transactions = initialState, { type, state, payload}) {
    switch (type) {
        case PAYMENT_TRANSACTION_FETCH:
            switch (state) {
                case REQUESTED:
                    return transactions;
                case FAILED:
                    return Object.assign({}, transactions, payload);
                case SUCCESS:
                    return updateTransactions(transactions, payload);
                default:
                    return transactions;
            }
        case WITHDRAW_SUCCESS: {
            return updateTransactions(transactions, payload)
        }
        default:
            return transactions;
    }
}
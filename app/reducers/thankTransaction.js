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
                    let user = payload.user;
                    let userTransactions = transactions[payload.user] ? transactions[payload.user] : {};
                    let updatedTransactions = Object.assign({}, userTransactions, { [payload.id] : payload });
                    return Object.assign({}, transactions, { [user] : updatedTransactions });
                default:
                    return transactions;
            }
        default:
            return transactions;
    }
}
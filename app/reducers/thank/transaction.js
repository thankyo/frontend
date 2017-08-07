import { THANK_TRANSACTION_REQUESTED, THANK_TRANSACTION_SUCCESS } from './transaction.actions';

const initialState = {};

export default function (transactions = initialState, { type, payload }) {
  switch (type) {
    case THANK_TRANSACTION_REQUESTED:
      return transactions;
    case THANK_TRANSACTION_SUCCESS:
      let { user } = payload;
      let userTransactions = (transactions[user] ? transactions[user] : []).slice();
      userTransactions.push(payload);
      return Object.assign({}, transactions, { [user]: userTransactions });
    default:
      return transactions;
  }
}
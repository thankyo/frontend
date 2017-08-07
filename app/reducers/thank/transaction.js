import { THANK_TRANSACTION_REQUESTED, THANK_TRANSACTION_SUCCESS } from './transaction.actions';

const initialState = {};

export default function (transactions = initialState, { type, user, payload }) {
  switch (type) {
    case THANK_TRANSACTION_REQUESTED:
      return transactions;
    case THANK_TRANSACTION_SUCCESS:
      return Object.assign({}, transactions, { [user]: payload });
    default:
      return transactions;
  }
}
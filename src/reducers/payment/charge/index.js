import moment from "moment/moment";
import { combineReducers } from "redux";
import { combineReducersInSingle, promiseReducer, promiseReducerDB } from 'reducers/util/promiseStates';

import { GET_CHARGES, GET_OUTGOING_TRANSACTIONS } from "./transaction.actions";
import { CHARGE_ACCOUNT_GET, CHARGE_ACCOUNT_SET, CHARGE_ACCOUNT_DELETE } from './account.actions';
import { GET_LIMIT, SET_LIMIT } from "./limit.actions";

const DEFAULT_LIMIT_STATE = {
  amount: 0,
  currency: "USD"
};

const setLimitReducer = (state = DEFAULT_LIMIT_STATE, { type, payload }) => {
  switch (type) {
    case SET_LIMIT:
      return payload;
    default:
      return state;
  }
};

const limitReducer = combineReducersInSingle(
  promiseReducer(SET_LIMIT, DEFAULT_LIMIT_STATE),
  promiseReducer(GET_LIMIT, DEFAULT_LIMIT_STATE),
  setLimitReducer
);

const DEFAULT_ACCOUNT_STATE = {
  isMissing: true,
  brand: "Visa",
  last4: "0000",
  type: "stripe"
};

const accountReducer = combineReducersInSingle(
  promiseReducer(CHARGE_ACCOUNT_GET, DEFAULT_ACCOUNT_STATE),
  promiseReducer(CHARGE_ACCOUNT_SET, DEFAULT_ACCOUNT_STATE),
  promiseReducer(CHARGE_ACCOUNT_DELETE, DEFAULT_ACCOUNT_STATE, (state) => state, (state, payload) => DEFAULT_ACCOUNT_STATE),
);

function mergeByDateAndProject(transactions){
  let mergedByDate = transactions.reduce((agg, tr) => {
    let { created } = tr;
    let dateStr = moment(created).format("MMMM Do");
    if (!agg[dateStr]) {
      agg[dateStr] = {
        dateStr,
        created,
        transactions: [tr],
        total: 1
      };
    } else {
      agg[dateStr].transactions.push(tr);
      agg[dateStr].total = agg[dateStr].total + 1;
    }
    return agg;
  }, {});

  let mergedByProject = Object.values(mergedByDate).map(({ created, total, dateStr, transactions }) => {
    let byProject = transactions.reduce((agg, tr) => {
      let { project, resource } = tr;
      let { _id: id } = project;
      if (!agg[id]) {
        agg[id] = {
          project,
          resources: [resource]
        }
      } else {
        agg[id]['resources'].push(resource)
      }
      return agg;
    }, {});

    return { dateStr, created, total, projects: Object.values(byProject) }
  });
  mergedByProject.reverse();

  return mergedByProject;
}


function byDateReducer(transactions = {}, { type, payload }) {
  switch (type) {
    case `${GET_OUTGOING_TRANSACTIONS}.fulfilled`:
      let dateToPrj = mergeByDateAndProject(payload.transactions);
      return Object.assign({}, transactions, { [payload.id]: Object.values(dateToPrj) });
    default:
      return transactions;
  }

  return transactions;
}

export default combineReducers({
  account: accountReducer,
  limit: limitReducer,
  transaction: combineReducers({
    charge: promiseReducerDB(GET_CHARGES),
    byUser: promiseReducerDB(GET_OUTGOING_TRANSACTIONS),
    byDate: byDateReducer
  })
})
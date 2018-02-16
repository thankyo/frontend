import moment from "moment";
import { combineReducers } from "redux";

import { GET_OUTGOING_TRANSACTION } from './transaction.actions';
import { promiseReducerDB } from "reducers/util/promiseStates";
import { GET_INCOMING_TRANSACTION } from "reducers/payment/transaction.actions";

const initialState = {};

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

function byDateReducer(transactions = initialState, { type, payload }) {
  switch (type) {
    case `${GET_OUTGOING_TRANSACTION}.fulfilled`:
      let dateToPrj = mergeByDateAndProject(payload.transactions);
      return Object.assign({}, transactions, { [payload.id]: Object.values(dateToPrj) });
    default:
      return transactions;
  }

  return transactions;
}

export default combineReducers({
  byDate: byDateReducer,
  byUser: promiseReducerDB(GET_OUTGOING_TRANSACTION),
  incoming: combineReducers({
    byUser: promiseReducerDB(GET_INCOMING_TRANSACTION),
  })
})
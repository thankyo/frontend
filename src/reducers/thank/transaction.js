import { THANK_TRANSACTION_REQUESTED, THANK_TRANSACTION_SUCCESS } from './transaction.actions';
import moment from "moment";

const initialState = {};

export default function (transactions = initialState, { type, user, payload }) {
  switch (type) {
    case THANK_TRANSACTION_REQUESTED:
      return transactions;
    case THANK_TRANSACTION_SUCCESS:
      let dateToTrs = payload.reduce((agg, tr) => {
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

      let dateToProj = Object.values(dateToTrs).map(({ created, total, dateStr, transactions }) => {
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
      dateToProj.reverse();

      return Object.assign({}, transactions, { [user]: Object.values(dateToProj) });
    default:
      return transactions;
  }
}
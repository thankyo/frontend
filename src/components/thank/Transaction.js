import React from "react";
import { connect } from "react-redux";
import { listTransactions } from "../../../reducers/thank/transaction.actions";
import moment from 'moment';
import Resource from "../Resource";

function ThankTransaction({ resource, destination: { firstName, lastName, shortBio },created }) {
  let dateStr = moment(created).format("MMMM Do");
  return (
    <li className="timeline-item">
      <div className="timeline-content">
        <p>{dateStr}</p>
        <p><b>{firstName} {lastName}</b> <small>{shortBio}</small></p>
        <Resource resource={resource}/>
      </div>
    </li>
  );
}

const ThankTransactions = ({ transactions }) => {
  return (
    <ul className="timeline timeline-new-style">
      <li className="timeline-header">
        <span className="button button-green">2017</span>
      </li>
      {transactions.map((transaction, i) => <ThankTransaction key={i} {...transaction}/>)}
    </ul>
  );
};

const mapStateToProps = ({ thank: { transaction } }, { id }) => {
  let transactions = transaction[id] ? transaction[id] : [];
  return { transactions };
};

const mapDispatchToProps = (dispatch, { id }) => {
  dispatch(listTransactions(id));
  return {}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThankTransactions);
import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getOutgoingTransactions } from "reducers/payment/charge/transaction.actions";
import Resource from "components/Resource";


function Transaction({ project, resource, created }){
  return (
    <tr>
      <td><Link to={`/creator/${project.user}/project/${project._id}`}>{project.title}</Link></td>
      <td><Resource resource={resource}/></td>
      <td>{moment(created).format("MMMM Do")}</td>
    </tr>
  );
}

function OutgoingSection({ transactions }) {
  return (
    <div className="has-text-centered">
      <p className="title is-5">Outgoing Transactions</p>
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <td className="is-3">Project</td>
            <td className="is-6">Link</td>
            <td className="is-3">Date</td>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, i) =>  <Transaction key={i} {... transaction}/>)}
        </tbody>
      </table>
    </div>
  );
}


const mapStateToProps = ({ payment: { charge: { transaction: { byUser: { my: { transactions = [] } = {} } } } } }) => {
  return { transactions };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(getOutgoingTransactions("my"));
  return {}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OutgoingSection);




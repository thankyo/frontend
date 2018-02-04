import React from "react";
import { connect } from "react-redux";
import { thisMonthEarnings } from "reducers/thank/earning.actions";
import MoneyToCoffeeIcon from "components/payment/MoneyToCoffeeIcon";

function EarnedThisMonth({ total }) {
  return (
    <article className="message">
      <div className="message-body">
        <div className="has-text-centered">
          <h3 className="title is-6">This month earnings</h3>
          <div className="earn-image">
            <MoneyToCoffeeIcon amount={total}/>
          </div>
          <span className="limit-count button button-blue">
            <b>{total}.0</b>
            <span>USD</span>
          </span>
        </div>
      </div>
    </article>
);
}

const mapStateToProps = ({thank: {earning}}) => {
  return earning;
};

const mapDispatchToProps = (dispatch) => {
  dispatch(thisMonthEarnings());
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(EarnedThisMonth);



import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { thisMonthEarnings } from "reducers/payment/earning.actions";
import MoneyToCoffeeIcon from "components/payment/MoneyToCoffeeIcon";

function EarnedThisMonth({ total }) {
  return (
    <article>
      <div>
        <div className="has-text-centered">
          <h3 className="title is-6">This month earnings</h3>
          <Link to="/settings/transaction/outgoing">
            <div className="earn-image">
              <MoneyToCoffeeIcon amount={total}/>
            </div>
            <span className="is-primary is-inverted">
              <b>{total / 10}</b>
              <span>USD</span>
            </span>
          </Link>
        </div>
      </div>
    </article>
);
}

const mapStateToProps = ({payment: {earning}}) => {
  return earning;
};

const mapDispatchToProps = (dispatch) => {
  dispatch(thisMonthEarnings());
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(EarnedThisMonth);



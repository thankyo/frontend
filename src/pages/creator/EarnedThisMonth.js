import React from "react";
import { connect } from "react-redux";
import { thisMonthEarnings } from "reducers/payment/earning.actions";
import MoneyToCoffeeIcon from "components/payment/MoneyToCoffeeIcon";

function EarnedThisMonth({ total }) {
  return (
    <article>
      <div>
        <div className="has-text-centered">
          <h3 className="title is-6">This month earnings</h3>
          <a>
            <div className="earn-image">
              <MoneyToCoffeeIcon amount={total}/>
            </div>
            <span className="is-primary is-inverted">
              <b>{total}.0</b>
              <span>USD</span>
            </span>
          </a>
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



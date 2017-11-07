import React from "react";
import { connect } from "react-redux";
import { decrease, increase } from "../../reducers/payment/limit.actions";
import MoneyToCoffeeIcon from "../../common/payment/MoneyToCoffeeIcon";
import { Icon } from "../../common/Icon";

function PaymentLimit({ limit, decrease, increase, fill = "#FFFFFF" }) {
  let { amount, currency } = limit;
  let cups = amount / 5;
  return (
    <article>
      <MoneyToCoffeeIcon amount={amount} fill={fill}/>
      <div>
        <p className="title limit-cups">
          <span>{cups} cup{cups > 1 && "s"} of coffee</span>
        </p>
        <p className="limit-count-block">
          <a className="limit-button" disabled={cups === 1} onClick={() => decrease(limit)}>
            <Icon className="fa fa-minus-circle"/>
          </a>
          <span className="limit-count">
            &nbsp;<b>{amount}.0</b>&nbsp;
            <span>{currency}</span>
          </span>
          <a className="limit-button" onClick={() => increase(limit)}>
            <Icon className="fa fa-plus-circle"/>
          </a>
        </p>
      </div>
      <p className="limit-text subtitle is-6">we'll <b className="is-danger">never</b> charge you more, than that</p>
    </article>
  );
}


const mapStateToProps = ({ payment: { limit } }) => {
  return { limit };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increase: (limit) => dispatch(increase(limit)),
    decrease: (limit) => dispatch(decrease(limit))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentLimit);



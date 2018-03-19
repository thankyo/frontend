import React, { Component } from "react";
import { connect } from "react-redux";

import { decrease, getLimit, increase } from "reducers/payment/charge/limit.actions";

import MoneyToCoffeeIcon from "components/payment/MoneyToCoffeeIcon";
import { DecrementIcon, IncrementIcon } from "components/Icon";
import Loading from "components/Loading";

class PaymentLimitSection extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };
  }
  componentWillMount() {
    let { limit: {  amount } } = this.props;
    if (amount !== 0) {
      this.setState({ loading: false })
    } else {
      this.props.getLimit().then(() => this.setState({ loading: false }));
    }
  }
  render() {
    if (this.state.loading) {
      return (
        <div className="has-text-centered">
          <p className="title is-5">Monthly Limit</p>
          <Loading />
        </div>
      )
    }

    let { limit, decrease, increase, fill } = this.props;
    let { amount, currency } = limit;
    let cups = amount / 5;
    return (
      <div className="has-text-centered">
        <p className="title is-5">Monthly Limit</p>
        <MoneyToCoffeeIcon amount={amount * 10} fill={fill} className="has-text-success"/>
        <div>
          <p className="title limit-cups">
            <span>{cups} cup{cups > 1 && "s"} of coffee</span>
          </p>
          <p className="limit-count-block">
            <a className="limit-button" disabled={cups === 1} onClick={() => decrease(limit)}>
              <DecrementIcon/>
            </a>
            <span className="limit-count">
            &nbsp;<b>{amount}.0</b>&nbsp;
              <span>{currency}</span>
          </span>
            <a className="limit-button" onClick={() => increase(limit)}>
              <IncrementIcon/>
            </a>
          </p>
        </div>
        <p className="limit-text subtitle is-6">we'll <b className="is-danger">never</b> charge you more, than that</p>
      </div>
    );
  }
}


const mapStateToProps = ({ payment: { charge: { limit } } }) => {
  return { limit };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLimit: () => dispatch(getLimit()),
    increase: (limit) => dispatch(increase(limit)),
    decrease: (limit) => dispatch(decrease(limit))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentLimitSection);




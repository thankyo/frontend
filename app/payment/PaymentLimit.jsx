import React, { Component } from "react";
import { getLimit, setLimit } from "../reducers/payment/limit.actions";
import { connect } from "react-redux";

class LimitPage extends Component {
  constructor(props) {
    super(props);

    this.state = { limit: this.props };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    let { limit } = this.state;
    let newLimit = Object.assign({}, limit, { amount: limit.amount + 5 });

    this.setState({ limit: newLimit });
    this.props.setLimit(newLimit);
  };

  decrease() {
    let { limit } = this.state;
    let newLimit = Object.assign({}, limit, { amount: limit.amount - 5 });

    this.setState({ limit: newLimit });
    this.props.setLimit(newLimit);
  };

  componentWillReceiveProps({ limit }) {
      this.props.limit === limit;
      this.setState({ limit });
  }

  render() {
    let { limit: { amount, currency } } = this.state;
    let cups = amount / 5;
    return (
      <div className="has-text-centered">
          <h6 className="title is-6">What is your monthly limit?</h6>
          <h5 className="title is-6 is-success">
              <span><b>{cups}</b></span>
              <span> cup{cups > 1 && "s"} of coffee</span>
          </h5>
          <h5 className="subtitle is-6 is-success">
              <span className="is-small">{amount}.0 {currency}</span>
          </h5>
          <h6 className="title is-6 has-addons is-grouped">
              <a onClick={this.increase}
                 className="button is-large is-success is-inverted"><span>+ more</span></a>
              <a onClick={this.decrease} className="button is-large is-danger is-inverted"
                 disabled={cups == 1}><span>- less</span></a>
          </h6>
          <h5 className="subtitle is-6">we'll <b className="is-danger">never</b> charge you more, than that</h5>
      </div>
    );
  };
}


const mapStateToProps = ({ payment: { limit } }) => {
  return { limit };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(getLimit());
  return {
    setLimit: (limit) => {
      dispatch(setLimit(limit));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LimitPage);




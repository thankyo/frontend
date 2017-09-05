import React from "react";
import { connect } from "react-redux";
import { decrease, getLimit, increase } from "../../../reducers/payment/limit.actions";

function cupToIcon(numCups) {
  if (numCups === 1) {
    return "/img/sup_icon_espresso.svg";
  } else if (numCups === 2) {
    return "/img/sup_icon_americano.svg";
  } else if (numCups === 3) {
    return "/img/sup_icon_latte.svg";
  } else {
    return "/img/sup_icon_siphone.svg";
  }
}

function LimitIcon({ cups }) {
  return (
    <div className="limit-image">
      <img src={cupToIcon(cups)} width="100" height="40" alt="Limit"/>
    </div>
  )
}

function LimitPage({ limit, decrease, increase }) {
  let { amount, currency } = limit;
  let cups = amount / 5;
  return (
    <article className="message ">
      <div className="message-body has-text-centered">
        <div className="limit">
          <LimitIcon cups={cups}/>
          <div className="limit-choose">
            <h6 className="title limit-title is-6">What is your monthly limit?</h6>
            <p className="title limit-cups">
              <span>{cups} cups of coffee</span>
            </p>
            <p className="limit-count-block">
              <a className="limit-button" disabled={cups === 1} onClick={() => decrease(limit)}>
                -
              </a>
              <span className="limit-count button button-blue">
                                        <b>{amount}.0</b>
                                        <span>{currency}</span>
                                      </span>
              <a className="limit-button limit-button-plus" onClick={() => increase(limit)}>
                <span>+</span>
              </a>
            </p>
          </div>
        </div>
        <p className="limit-text subtitle is-7">we'll <b className="is-danger">never</b> charge you more, than that</p>
      </div>
    </article>
  );
}


const mapStateToProps = ({ payment: { limit } }) => {
  return { limit };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(getLimit());
  return {
    increase: (limit) => dispatch(increase(limit)),
    decrease: (limit) => dispatch(decrease(limit))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LimitPage);




import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

const submitClassName = ({ className, submitting }) => cx(
  className,
  "button",
  {
    "is-loading": submitting
  }
);

export const SubmitButton = (props) => (
  <button type="submit" className={submitClassName(props)}>
    {props.children}
  </button>
);

SubmitButton.propTypes = {
  submitting: PropTypes.bool.isRequired
};
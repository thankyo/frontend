import React from "react";
import PropTypes from "prop-types";

export function Icon({ className }) {
  return (
    <span className="icon"><i className={className}/></span>
  )
}

Icon.propTypes = {
  className: PropTypes.string.isRequired,
};

export function IconWithText({ className, text }) {
  return (
    <span className="is-narrow">
      <span className="icon"><i className={className}/></span>
      <span>{text}</span>
    </span>
  )
}

IconWithText.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired
};

export function WebStackIcon({ webStack }) {
  switch (webStack) {
    case "WordPress":
      return (<IconWithText className="fa fa-wordpress"/>);
    default:
      return (<IconWithText className="fa fa-code"/>)
  }
}

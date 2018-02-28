import React from "react";
import PropTypes from "prop-types";

export function Icon({ className, children }) {
  if (!children) {
    return (
      <span className="is-narrow">
        <span className="icon"><i className={className}/></span>
      </span>
    );
  } else {
    return (
      <span className="is-narrow">
        <span className="icon"><i className={className}/></span>
        <span>{children}</span>
      </span>
    )
  }
}

Icon.propTypes = {
  className: PropTypes.string.isRequired,
};

export function WebStackIcon({ webStack }) {
  switch (webStack) {
    case "WordPress":
      return (<Icon className="fa fa-wordpress"/>);
    default:
      return (<Icon className="fa fa-code"/>)
  }
}

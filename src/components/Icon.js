import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Icon extends Component {
  render() {
    let { fa, size } = this.props;
    let iconClass = `fa fa-${fa}`;
    let spanClass = size ? `icon is-${size}` : "icon";
    return (
      <span className="is-narrow">
        <span className={spanClass}><i className={iconClass}/></span><span>{this.props.text}</span>
      </span>
    )
  }
}

Icon.propTypes = {
  fa: PropTypes.string.isRequired,
  text: PropTypes.string,
};
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class DateView extends Component {
  render() {
    let date = new Date(this.props.time);
    return (
      <span>
                {date.getUTCDate()} / {date.getUTCMonth()} / {date.getUTCFullYear()}
            </span>);
  }
}

DateView.propTypes = {
  time: PropTypes.number.isRequired
};
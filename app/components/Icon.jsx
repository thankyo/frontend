import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Icon extends Component {
    render() {
        let className = `fa fa-${this.props.fa}`;
        return (
          <span className="is-narrow">
            <span className="icon"><i className={className}></i></span><span>{this.props.text}</span>
          </span>
        )
    }
}

Icon.propTypes = {
    fa: PropTypes.string.isRequired,
    text: PropTypes.string,
};
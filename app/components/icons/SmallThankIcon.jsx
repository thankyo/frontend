import React, {Component} from "react";
import PropTypes from "prop-types";

export default class SmallThankIcon extends Component {
    render() {
        return (
            <span className="content">
                <span className="icon is-small">
                    <i className="fa fa-heart-o"></i>
                </span>
                <span className="icon is-small">
                    {this.props.balance}
                </span>
            </span>
        )
    }
}

SmallThankIcon.propTypes = {
    balance: PropTypes.number.isRequired
};
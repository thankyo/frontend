import React, {Component} from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

export default class SmallThankIcon extends Component {
    render() {
        return (
            <span className="content">
                <Icon fa="heart-o" text={this.props.balance}/>
            </span>
        )
    }
}

SmallThankIcon.propTypes = {
    balance: PropTypes.number.isRequired
};
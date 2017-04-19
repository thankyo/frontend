import React, { Component } from 'react';
import PropTypes from "prop-types";

export default class ProviderIcon extends Component {
    facebookIcon() {
        return (
            <span className="icon is-small">
                <i className="fa fa-facebook-square"></i>
            </span>
        )
    }
    unknownIcon() {
        return (
            <span className="icon is-small">
                <i className="fa fa-heart"></i>
            </span>
        )
    }
    render() {
        if (this.props.providerID === "facebook")
            return this.facebookIcon();
        else
            return this.unknownIcon();
    }
}

ProviderIcon.propTypes = {
    providerID: PropTypes.string.isRequired
};
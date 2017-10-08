import React, { Component } from 'react';
import PropTypes from "prop-types";
import Icon from "./Icon";

export default class ProviderIcon extends Component {
    static facebookIcon() {
        return (
            <Icon fa="facebook-square" />
        )
    }
    static unknownIcon() {
        return (
            <Icon fa="heart"/>
        )
    }
    render() {
        if (this.props.providerID === "facebook")
            return ProviderIcon.facebookIcon();
        else
            return ProviderIcon.unknownIcon();
    }
}

ProviderIcon.propTypes = {
    providerID: PropTypes.string.isRequired
};
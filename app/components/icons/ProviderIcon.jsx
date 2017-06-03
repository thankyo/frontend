import React, { Component } from 'react';
import PropTypes from "prop-types";
import Icon from "components/Icon";

export default class ProviderIcon extends Component {
    facebookIcon() {
        return (
            <Icon fa="facebook-square" />
        )
    }
    unknownIcon() {
        return (
            <Icon fa="heart"/>
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
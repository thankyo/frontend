import React, { Component, PropTypes } from 'react';

export default class ProviderIcon extends Component {
    facebookIcon() {
        return (
            <div>
                <span className="icon is-small">
                    <i className="fa fa-facebook-square"></i>
                </span>
            </div>
        )
    }
    unknownIcon() {
        return (
            <div>
                <span className="icon is-small">
                    <i className="fa fa-heart"></i>
                </span>
            </div>
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
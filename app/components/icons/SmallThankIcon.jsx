import React, { Component, PropTypes } from 'react';

export default class SmallThankIcon extends Component {
    render() {
        return (
            <div>
                <span className="icon is-small">
                    <i className="fa fa-heart-o"></i>
                </span>
                <span>{this.props.balance}</span>
            </div>
        )
    }
}

SmallThankIcon.propTypes = {
    balance: PropTypes.number.isRequired
};
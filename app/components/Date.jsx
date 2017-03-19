import React, { Component, PropTypes } from 'react';

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
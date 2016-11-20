import React from 'react';

const moment = require('moment');

export class BookingsHeader extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="bookings-header">
                <span>{getFormattedDate(this.props.selectedDate)}</span>
                <div className="bookings-header-actions">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </div>
            </div>
        );
    }
}

function getFormattedDate(date) {
    return moment(date).format('MMMM YYYY');
}

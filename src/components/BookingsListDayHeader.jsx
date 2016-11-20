import React from 'react';

const moment = require('moment');

export class BookingsListDayHeader extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="bookings-list-day-header">
                <span>{getFormattedDate(this.props.date)}</span>
            </div>
        );
    }
}

function getFormattedDate(date) {
    return moment.utc(date).format('ddd MMM D');
}

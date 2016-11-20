import React from 'react';

const moment = require('moment');

export class BookingsListDayEvent extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div key="{this.props.event.id}" className="bookings-list-day-event">
                <div className="event-start-end">
                    <span>{getFormattedTime(this.props.start)}</span><br/>
                    <span>{getFormattedTime(this.props.end)}</span>
                </div>
                <div className="event-name-room">
                    <span>{this.props.name}</span><br/>
                    <span>{this.props.room}</span>
                </div>
            </div>
        );
    }
}

function getFormattedTime(date) {
    return moment(date).format('h:mm a');
}

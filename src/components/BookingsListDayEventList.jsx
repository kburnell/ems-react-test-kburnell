import React from 'react';

import {BookingsListDayEvent} from '../components/BookingsListDayEvent';

export class BookingsListDayEventList extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="bookings-list-day-event-list">
                {this.props.events.map((event) =>
                     <BookingsListDayEvent key={event.get('id')} start={event.get('start')} end={event.get('end')} name={event.get('eventName')} room={event.get('roomName')} />
                )}
            </div>
        );
    }
}

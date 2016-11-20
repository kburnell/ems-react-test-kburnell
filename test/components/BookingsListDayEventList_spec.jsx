import React from 'react';
import {renderIntoDocument, scryRenderedDOMComponentsWithClass} from 'react-addons-test-utils';
import {List, Map} from 'immutable';
import {expect} from 'chai';

import {BookingsListDayEventList} from '../../src/components/BookingsListDayEventList';

describe('BookingsListDayEventList', () => {

    it('renders expected elements', () => {
        const bookings = List.of(
            Map({'id': 0, 'eventName': 'Test Booking 01', 'roomName': 'Demo Room 01', 'start': '2016-11-10T13:00:00.000Z', 'end': '2016-11-10T13:30:00.000Z'}),
            Map({'id': 1, 'eventName': 'Test Booking 02', 'roomName': 'Demo Room 02', 'start': '2016-11-10T14:00:00.000Z', 'end': '2016-11-10T15:00:00.000Z'}),
        );
        const component = renderIntoDocument(
            <BookingsListDayEventList events={bookings} />
        );

        const root = scryRenderedDOMComponentsWithClass(component, 'bookings-list-day-event-list');
        const events = scryRenderedDOMComponentsWithClass(component, 'bookings-list-day-event');

        expect(root.length).to.equal(1);
        expect(events.length).to.equal(2);

    });

});

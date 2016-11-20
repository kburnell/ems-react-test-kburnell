import React from 'react';
import {renderIntoDocument, scryRenderedDOMComponentsWithClass} from 'react-addons-test-utils';
import {expect} from 'chai';
import {List, Map} from 'immutable';

import {BookingsListDay} from '../../src/components/BookingsListDay';

describe('BookingsListDay', () => {

    it('renders expected elements', () => {
        const date = new Date(2016, 10, 18);
        const bookings = List.of(
            Map({'id': 0, 'eventName': 'Test Booking 01', 'roomName': 'Demo Room 01', 'start': '2016-11-10T13:00:00.000Z', 'end': '2016-11-10T13:30:00.000Z'}),
            Map({'id': 1, 'eventName': 'Test Booking 02', 'roomName': 'Demo Room 02', 'start': '2016-11-10T14:00:00.000Z', 'end': '2016-11-10T15:00:00.000Z'}),
        );
        const key = 2;
        const component = renderIntoDocument(
            <BookingsListDay key={key} date={date} bookings={bookings} />
        );

        const root = scryRenderedDOMComponentsWithClass(component, 'bookings-list-day');
        const header = scryRenderedDOMComponentsWithClass(component, 'bookings-list-day-header');
        const list = scryRenderedDOMComponentsWithClass(component, 'bookings-list-day-event-list');

        expect(root.length).to.equal(1);
        expect(header.length).to.equal(1);
        expect(list.length).to.equal(1);

    });

});

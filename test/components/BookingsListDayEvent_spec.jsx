import React from 'react';
import {renderIntoDocument, scryRenderedDOMComponentsWithClass, scryRenderedDOMComponentsWithTag} from 'react-addons-test-utils';
import {expect} from 'chai';

import {BookingsListDayEvent} from '../../src/components/BookingsListDayEvent';

describe('BookingsListDayEvent', () => {

    it('renders expected elements', () => {
        const id = 2;
        const name = 'Test Event 01';
        const room = 'Demo Room 01';
        const start = '2016-11-10T13:00:00.000Z';
        const end = '2016-11-10T13:30:00.000Z';
        const component = renderIntoDocument(
            <BookingsListDayEvent key={id} start={start} end={end} name={name} room={room}/>
        );

        const root = scryRenderedDOMComponentsWithClass(component, 'bookings-list-day-event');
        const startEnd = scryRenderedDOMComponentsWithClass(component, 'event-start-end');
        const nameRoom = scryRenderedDOMComponentsWithClass(component, 'event-name-room');
        const valueSpans = scryRenderedDOMComponentsWithTag(component, 'span');

        expect(root.length).to.equal(1);
        expect(startEnd.length).to.equal(1);
        expect(nameRoom.length).to.equal(1);
        expect(valueSpans.length).to.equal(4);
    });

    it('renders expected values', () => {
        const id = 2;
        const name = 'Test Event 01';
        const room = 'Demo Room 01';
        const start = '2016-11-10T13:00:00.000Z';
        const end = '2016-11-10T13:30:00.000Z';
        const component = renderIntoDocument(
            <BookingsListDayEvent key={id} start={start} end={end} name={name} room={room}/>
        );

        const valueSpans = scryRenderedDOMComponentsWithTag(component, 'span');

        expect(valueSpans[0].textContent).to.equal('7:00 am');
        expect(valueSpans[1].textContent).to.equal('7:30 am');
        expect(valueSpans[2].textContent).to.equal('Test Event 01');
        expect(valueSpans[3].textContent).to.equal('Demo Room 01');

    });

});

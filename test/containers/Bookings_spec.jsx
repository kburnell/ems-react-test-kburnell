import React from 'react';
import {renderIntoDocument, scryRenderedDOMComponentsWithClass} from 'react-addons-test-utils';
import {expect} from 'chai';
import {List, Map} from 'immutable';

import {Bookings} from '../../src/containers/Bookings';

describe('Bookings', () => {

    it('renders expected elements', () => {
        const selectedDate = new Date(2016, 10, 18);
        const bookings = List.of(
            Map({'date': '2016-11-10T00:00:00.000Z', 'bookings': []}),
            Map({'date': '2016-11-11T00:00:00.000Z', 'bookings': []})
        );

        const component = renderIntoDocument(
            <Bookings selectedDate={selectedDate} bookings={bookings} />
        );

        const root = scryRenderedDOMComponentsWithClass(component, 'bookings');
        const header = scryRenderedDOMComponentsWithClass(component, 'bookings-header');
        const list = scryRenderedDOMComponentsWithClass(component, 'bookings-list');

        expect(root.length).to.equal(1);
        expect(header.length).to.equal(1);
        expect(list.length).to.equal(1);
    });

});

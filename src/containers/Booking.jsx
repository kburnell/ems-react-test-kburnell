import React from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../action_creators';

export class Booking extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Booking!</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

export const BookingContainer = connect(mapStateToProps, actionCreators)(Booking);

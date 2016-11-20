import {Map} from 'immutable';

function setState(state, newState) {
    return state.merge(newState);
}

function setCalendarVisibility(state, currentlyShowing) {
    return state.set('showCalendar', !currentlyShowing);
}

function changeSelectedDate(state, newDate) {
    return state.set('selectedDate', newDate).set('showCalendar', false);
}

export default function(state = Map(), action) {
    switch (action.type) {
        case 'SET_STATE':
            return setState(state, action.state);
        case 'SHOW_CALENDAR':
            return setCalendarVisibility(state, action.currentlyShowing);
        case 'CHANGE_SELECTED_DATE':
            return changeSelectedDate(state, action.newDate);
    }
    return state;
}

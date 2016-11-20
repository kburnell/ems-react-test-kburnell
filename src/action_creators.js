export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function setCalendarVisibility(currentlyShowing) {
    return {
        type: 'SHOW_CALENDAR',
        currentlyShowing
    };
}

export function changeSelectedDate(newDate) {
    return {
        type: 'CHANGE_SELECTED_DATE',
        newDate
    };
}

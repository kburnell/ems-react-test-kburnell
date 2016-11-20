export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function setBookings(bookings) {
    return {
        type: 'SET_BOOKINGS',
        bookings
    };
}

const initialState = {
  totalTickets: 100,
  filledTickets: 87,
  blockedTickets: 3,
  unfilledTickets: 10,
};

export function ticketReducer(state = initialState, action) {
  switch (action.type) {
    case "BUY_TICKET":
      if (
        state.filledTickets <= 100 &&
        state.unfilledTickets >= 0 &&
        state.blockedTickets > 0
      ) {
        return {
          ...state,
          filledTickets: state.filledTickets + action.payload,
          unfilledTickets: state.unfilledTickets - action.payload,
          blockedTickets: state.blockedTickets - 1,
        };
      }
      break;
    case "BLOCK_TICKET":
      if (
        state.filledTickets <= 100 &&
        state.unfilledTickets >= 0 &&
        state.blockedTickets > 0
      ) {
        return {
          ...state,
          blockedTickets: state.blockedTickets + 1,
          unfilledTickets: state.unfilledTickets - 1,
        };
      }
      break;
    case "CANCEL_TICKET":
      if (
        state.filledTickets <= 100 &&
        state.unfilledTickets >= 0 &&
        state.blockedTickets > 0
      ) {
        return {
          ...state,
          unfilledTickets: state.unfilledTickets + 1,
          filledTickets: state.filledTickets - 1,
        };
      }
      break;
    default:
      return state;
  }
}

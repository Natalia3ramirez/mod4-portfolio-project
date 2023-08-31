import { csrfFetch } from "./csrf";

const GET_USER_BOOKINGS = 'bookings/GET_USER_BOOKINGS';
const GET_SPOT_BOOKINGS = 'bookings/GET_SPOT_BOOKINGS'
const CREATE_BOOKING = 'bookings/CREATE_BOOKING';
const DELETE_BOOKINGS = 'bookings/DELETE_BOOKINGS';

const getBookingsByUser = (bookings) => {
  return {
    type: GET_USER_BOOKINGS,
    bookings
  }
}

const getSpotBookings = (spotId, bookings) => {
  return {
    type: GET_SPOT_BOOKINGS,
    spotId,
    bookings
  }
}

// const createBooking = (booking, spotId, user) => {
//   return {
//     type: CREATE_BOOKING,
//     spotId
//   }
// }

export const thunkGetBookingsByUser = () => async (dispatch) => {
  const response = await csrfFetch(`/api/bookings/current`)

  if (response.ok) {
    const data = await response.json();
    dispatch(getBookingsByUser(data));
    return response
  }else {
    const errors = await response.json();
    return errors
  }
}

export const thunkGetSpotBookings = (spotId) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}/bookings`)

  if (response.ok) {
    const bookings = await response.json();
    dispatch(getSpotBookings(bookings));
    return response
  }else {
    const errors = await response.json();
    return errors
  }
}

export const thunkCreateBooking = (booking, userId, spotId) => async dispatch => {
  const response = await csrfFetch(`/api/spots/${spotId}/bookings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
  })
  if (response.ok) {
      const data = await response.json();
      dispatch(getSpotBookings(spotId))
      return data;
  }
  else {
      const error = await response.json()
      return error;
  }
}


const initialState = { spot: {}, user: {} };

export default function bookingsReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_SPOT_BOOKINGS:
      newState = { ...state, spot: { ...state.spot} }
      newState.spot[action.spotId] = {}
      action.bookings.forEach(booking => {
        newState.spot[action.spotId][booking.id] = booking
      });
      case GET_USER_BOOKINGS:
        newState = {}
        action.spotId.Bookings.forEach(booking => {
          newState[booking.id] = booking
        });
      return newState
  //   case DELETE_REVIEW:
  //     newState = {...state, spot: {...state.spot}}
  //     delete newState.spot[action.spotId][action.reviewId]
  //     return newState

  //  case CLEAN_UP_REVIEWS:
  //   return initialState

    default:
      return state;
  }
}

import { csrfFetch } from "./csrf";

const GET_SPOTS = 'spots/getSpots';
const GET_SPOT = 'spots/getSpot';
const DELETE_SPOT = 'spots/delete';


//action creator
const getSpots = (spots) => {
  return {
    type: GET_SPOTS,
    spots
  }
}

const getSpot = (spot) => {
  return {
    type: GET_SPOT,
    spot
  }
}

const deleteSpot = (spotId) => {
  return {
    type: DELETE_SPOT,
    spotId
  }
}



//thunk creator
export const thunkGetSpots = () => async (dispatch) => {
  const response = await csrfFetch('/api/spots');

  if (response.ok) {
    const spots = await response.json();
    dispatch(getSpots(spots));
    return response
  }
}

export const thunkGetSpotInfo = (spotId) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}`)

  if (response.ok) {
    const spot = await response.json()
    dispatch(getSpot(spot))
    return response
  } else {
    const errors = await response.json();
    return errors
  }
}

export const thunkGetUserSpots = () => async (dispatch) => {
  const response = await csrfFetch("/api/spots/current")

  if (response.ok) {
    const spots = await response.json()
    dispatch(getSpots(spots))
    return response
  } else {
    const errors = await response.json();
    return errors
  }
}

export const thunkDeleteSpot = (spotId) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}`, {
    method: 'DELETE',
  });
  dispatch(deleteSpot(spotId))
  return response
}

//reducer

const initialState = { allSpots: {}, singleSpot: {} }

export default function spotsReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_SPOTS:
      newState = { ...state, allSpots: {}, singleSpot: {} }
      action.spots.Spots.forEach(spot => {
        newState.allSpots[spot.id] = spot
      });
      return newState

    case GET_SPOT:
      newState = { ...state, singleSpot: {} }
      newState.singleSpot = action.spot
      return newState

    case DELETE_SPOT:
      newState = { ...state, allSpots: { ...state.allSpots}, singleSpot: {}}
      delete newState.allSpots[action.spotId]
      return newState

      default:
        return state;
  }
}

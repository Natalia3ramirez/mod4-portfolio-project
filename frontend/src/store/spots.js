import { csrfFetch } from "./csrf";

const GET_SPOTS = 'spots/getSpots';
const GET_SPOT = 'spots/getSpot';


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
      default:
      return state;
  }
}

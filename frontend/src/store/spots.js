import { csrfFetch } from "./csrf";

const GET_SPOTS = 'spots/getSpots';
const GET_SPOT = 'spots/getSpot';
const DELETE_SPOT = 'spots/delete';
const CREATE_SPOT = 'spot/createSpot'


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

const createSpot = (spot) => {
  return {
    type: CREATE_SPOT,
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

export const thunkCreateSpot = (spot, spotImages, user ) => async (dispatch) => {
  const response = await csrfFetch('/api/spots', {
    method: 'POST',
    headers: { 'Content-Type': "application/json"},
    body: JSON.stringify(spot)
  })

  if(response.ok) {
    const data = await response.json()
    dispatch(thunkSpotImage(data, spotImages, user))
    return data
  } else {
    const errors = await response.json();
    return errors
  }
}

export const thunkSpotImage = (spot, spotImages, user) => async (dispatch) => {

  for(let i = 0; i < spotImages.length; i++) {
    const image = spotImages[i]
    await csrfFetch(`/api/spots/${spot.id}/images`,{
      method: 'POST',
      body: JSON.stringify(image)
    })
  }
}

export const thunkUpdateSpot = (spot, spotId) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}`, {
    method: 'PUT',
    headers: { 'Content-Type': "application/json"},
    body: JSON.stringify(spot)
  })
  if(response.ok) {
    const updateSpot = await response.json();
    dispatch(createSpot(updateSpot))
    // return updateSpot
  }else {
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

    case DELETE_SPOT:
      newState = { ...state, allSpots: { ...state.allSpots}, singleSpot: {}}
      delete newState.allSpots[action.spotId]
      return newState

    case CREATE_SPOT:
      newState = {...state, allSpots: {...state.allSpots}, singleSpot: { ...action.spot}}
      newState.allSpots[action.spot.id] = action.spot
      return newState;

      default:
        return state;
  }
}

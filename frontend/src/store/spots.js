import { csrfFetch } from "./csrf";

const GET_SPOTS = 'spots/getSpots';


//action creator
const getSpots = (spots) => {
  return {
    type: GET_SPOTS,
    spots
  }
}


//thunk creator
export const thunkGetSpots = () => async (dispatch) => {
  const response = await csrfFetch('/api/spots');

  if(response.ok){
    const spots = await response.json();
    dispatch(getSpots(spots));
    return response
  }
}

//reducer

const initialState = { allSpots: {}, singleSpot: {spotImages: []}}

export default function spotsReducer (state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_SPOTS:
      newState = { ...state, allSpots: {}, singleSpot: {}}
      action.spots.Spots.forEach(spot => {
        newState.allSpots[spot.id] = spot
      });
      return newState

      default:
        return state;
  }
}

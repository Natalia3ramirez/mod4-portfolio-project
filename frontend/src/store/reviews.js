import { csrfFetch } from "./csrf";


const GET_SPOT_REVIEWS = 'spots/spot/getSpotReviews';

const getSpotReviews = (reviews) => {
  return {
    type: GET_SPOT_REVIEWS,
    reviews
  }
}

//thunk
export const thunkGetSpotReviews = (spotId) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}/reviews`);

  if (response.ok) {
    const reviews = await response.json();
    dispatch(getSpotReviews(reviews.Reviews));
    return response
  }
}



//reducer

const initialState = { spot: {}, user: {} };

export default function reviewsReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_SPOT_REVIEWS:
      newState = { ...state, spot: {}, user: {} }
      action.reviews.forEach(review => {
        newState.spot[review.id] = review
      });
      return newState
    default:
      return state;
  }
}

import { csrfFetch } from "./csrf";


const GET_SPOT_REVIEWS = 'spots/spot/getSpotReviews';
const DELETE_REVIEW = 'spots/spot/deleteReview';
const CLEAN_UP_REVIEWS = 'reviews/cleanupReviews'

const getSpotReviews = (reviews, spotId) => {
  return {
    type: GET_SPOT_REVIEWS,
    reviews, spotId
  }
}



export const cleanupReviews = () => {
  return {
    type: CLEAN_UP_REVIEWS
  }
}


//thunk
export const thunkGetSpotReviews = (spotId) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}/reviews`);

  if (response.ok) {
    const reviews = await response.json();
    dispatch(getSpotReviews(reviews.Reviews, spotId));
    return response
  }else {
    const errors = await response.json();
    return errors
  }
}

export const thunkCreateReview = (review, spotId, user) => async (dispatch) => {

  try {
    const response = await csrfFetch(`/api/spots/${spotId}/reviews`, {
      method: "POST",
      body: JSON.stringify(review)
  })
    const newReview = await response.json()
    newReview.User = { id: user.id, firstName: user.firsName, lastName: user.lastName};
    newReview.ReviewImages = []
    dispatch(thunkGetSpotReviews(spotId))
    return newReview
 } catch (e) {
    const errors = await e.json();
    return errors
  }
}

export const thunkDeleteReview = (reviewId, spotId) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: "DELETE"
  })
  const data = await response.json()
  dispatch(thunkGetSpotReviews(spotId))
  return data
}



//reducer

const initialState = { spot: {}, user: {} };

export default function reviewsReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_SPOT_REVIEWS:
      newState = { ...state, spot: { ...state.spot} }
      newState.spot[action.spotId] = {}
      action.reviews.forEach(review => {
        newState.spot[action.spotId][review.id] = review
      });
      return newState
    case DELETE_REVIEW:
      newState = {...state, spot: {...state.spot}}
      delete newState.spot[action.spotId][action.reviewId]
      return newState

   case CLEAN_UP_REVIEWS:
    return initialState

    default:
      return state;
  }
}

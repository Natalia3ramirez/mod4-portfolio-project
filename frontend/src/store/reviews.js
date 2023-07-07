import { csrfFetch } from "./csrf";


const GET_SPOT_REVIEWS = 'spots/spot/getSpotReviews';
const CREATE_REVIEW = 'spots/spot/createReview';
const DELETE_REVIEW = 'spots/spot/deleteReview';

const getSpotReviews = (reviews) => {
  return {
    type: GET_SPOT_REVIEWS,
    reviews
  }
}

const createReview = (review) => {
  return {
    type: CREATE_REVIEW,
    review
  }
}
const deleteReview = (reviewId) => {
  return {
    type: DELETE_REVIEW,
    reviewId
  }
}


//thunk
export const thunkGetSpotReviews = (spotId) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}/reviews`);

  if (response.ok) {
    const reviews = await response.json();
    dispatch(getSpotReviews(reviews.Reviews));
    return response
  }else {
    const errors = await response.json();
    return errors
  }
}

export const thunkCreateReview = (review, spotId, user) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}/reviews`, {
    method: "POST",
    body: JSON.stringify(review)
  })
  if (response.ok) {
    const newReview = await response.json()
    newReview.User = { id: user.id, firstName: user.firsName, lastName: user.lastName};
    newReview.ReviewImages = []
    dispatch(createReview(newReview))
    return newReview
  } else {
    const errors = await response.json();
    return errors
  }
}

export const thunkDeleteReview = (reviewId) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: "DELETE"
  })
  const data = await response.json()
  dispatch(deleteReview(reviewId))
  return data
}



//reducer

const initialState = { spot: {}, user: {} };

export default function reviewsReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_SPOT_REVIEWS:
      newState = { ...state, spot: {} }
      action.reviews.forEach(review => {
        newState.spot[review.id] = review
      });
      return newState
    case DELETE_REVIEW:
      newState = {...state, spot: {...state.spot}}
      delete newState.spot[action.reviewId]
      return newState

    case CREATE_REVIEW:
      newState = { ...state, spot: { ...state.spot }, user: { ...state.user, ...action.review}}
      newState.spot[action.review.id] = action.review
      return newState
    default:
      return state;
  }
}

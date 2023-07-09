import { useSelector, useDispatch } from 'react-redux';
import { SingleSpotInformation } from '../SingleSpotInformation';
import { DeleteReviewModalButton } from './DeleteReviewModalButton';
import OpenModalButton from '../OpenModalButton';
import './SpotReviews.css'
import { CreateReviewModalButton } from './CreateReviewModalButton';
import { useParams } from 'react-router-dom';
import { thunkGetSpotReviews } from '../../store/reviews';
import { useEffect } from 'react';



export const SpotReviews = () => {
  const { spotId } = useParams()
  const reviews = useSelector(state => state.review.spot)
  const spot = useSelector(state => (state.spot.singleSpot))
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(thunkGetSpotReviews(spotId))
  }, [dispatch])

  if (!reviews[spotId]) return null
  const reviewsList = Object.values(reviews[spotId]).reverse()

  const generateDate = (date) => {
    const event = new Date(date);
    const month = event.toLocaleString('default', { month: 'long' });
    const year = event.toLocaleString('default', { year: 'numeric' });
    return `${month} ${year}`
  }

  const { avgStarRating, numReviews } = spot
  const previousReview = user && reviewsList.find((review) => review.userId === user.id)


  return (
    <div className='single-spot-details'>
      <SingleSpotInformation />
      <div>
        {reviewsList.length ?
          <div>
            <div>
              <h2 className='stars'><span className="material-symbols-outlined">star_rate</span>{Number(avgStarRating).toFixed(2)} · {numReviews} {numReviews > 1 ? "Reviews" : "Review"}</h2>
              <div className='post-review-container'>
                {user && !previousReview && (spot.ownerId !== user?.id) &&
                  <OpenModalButton buttonText='Post Your Review' modalComponent={<CreateReviewModalButton spot={spot} user={user} />} />}
              </div>
              {reviewsList.map((review) => (
                <div className='delete-button-container' key={review.id}>
                  <h3 className="user-first-name">{review.User.firstName}</h3>
                  <h4>{generateDate(review.createdAt)}</h4>
                  <p>{review.review}</p>
                  {(review.userId === user?.id) && 
                    <OpenModalButton buttonText='Delete Review' modalComponent={<DeleteReviewModalButton reviewId={review.id} spotId={spot.id} />} />}
                </div>
              ))}
            </div>
          </div>
          :
          <div>
            <h2 className='stars' ><span className="material-symbols-outlined">star_rate</span> New</h2>
            <div className='post-review-container'>
              {user && !previousReview && (spot.ownerId !== user?.id) &&
                <OpenModalButton buttonText='Post Your Review' modalComponent={<CreateReviewModalButton spot={spot} user={user} />} />}
              {user && !previousReview && (spot.ownerId !== user?.id) &&
                <h3>Be the first to post a review!</h3>}
            </div>
          </div>}

      </div>

    </div>
  )
}

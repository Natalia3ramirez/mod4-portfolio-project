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
  const {spotId} = useParams()
  const reviews = useSelector(state =>  state.review.spot)
  console.log("these are the spotreviews", reviews)
  const spot = useSelector(state => (state.spot.singleSpot))
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(thunkGetSpotReviews(spotId))
  }, [dispatch])

  if(!reviews[spotId]) return null
  const reviewsList = Object.values(reviews[spotId])
  console.log("this is the reviewsList", reviewsList)

  const generateDate = (date) => {
    const event = new Date(date);
    const month = event.toLocaleString('default', { month: 'long' });
    const year = event.toLocaleString('default', { year: 'numeric' });
    return `${month} ${year}`
  }

  const {  avgStarRating, numReviews} = spot
  console.log("this is my review list", reviewsList)
  const previousReview = user && reviewsList.find((review) => review.userId === user.id)
  return (
    <div>
        <SingleSpotInformation />
        <div className='post-review-container'>
        {!previousReview && (spot.ownerId !== user?.id) &&
              <OpenModalButton buttonText='Post Your Review' modalComponent={<CreateReviewModalButton spot={spot} user={user} />} />}
        </div>
      <div>
      <h2 className='stars'><span className="material-symbols-outlined">star_rate</span>{avgStarRating} · {numReviews} {numReviews > 1 ? "Reviews" : "Review"}</h2>
        {reviewsList.map((review) => (
          <div key={review.id}>
            <h3 className="user-first-name">{review.User.firstName}</h3>
            <h4>{generateDate(review.createdAt)}</h4>
            <p>{review.review}</p>
            {(review.userId === user?.id) &&
              <OpenModalButton buttonText='Delete Review' modalComponent={<DeleteReviewModalButton reviewId={review.id} spotId={spot.id} />} />}

          </div>

        ))}
      </div>

    </div>
  )
}

import { useSelector } from 'react-redux';
import { SingleSpotInformation } from '../SingleSpotInformation';
import { DeleteReviewModalButton } from './DeleteReviewModalButton';
import OpenModalButton from '../OpenModalButton';
import './SpotReviews.css'
import { CreateReviewModalButton } from './CreateReviewModalButton';



export const SpotReviews = () => {

  const reviews = useSelector(state =>  state.review.spot)
  const reviewsList = Object.values(reviews)

  const spot = useSelector(state => (state.spot.singleSpot))
  const user = useSelector(state => state.session.user)

  const generateDate = (date) => {
    const event = new Date(date);
    const month = event.toLocaleString('default', { month: 'long' });
    const year = event.toLocaleString('default', { year: 'numeric' });
    return `${month} ${year}`
  }

  const {  avgStarRating, numReviews} = spot
  const previousReview = user && reviewsList.find((review) => review.User.id === user.id)

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

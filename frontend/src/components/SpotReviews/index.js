import { useDispatch, useSelector } from 'react-redux';
import { SingleSpotInformation } from '../SingleSpotInformation';




export const SpotReviews = () => {

  const reviews = useSelector(state =>  state.review.spot)
  const reviewsList = Object.values(reviews)

  const spot = useSelector(state => (state.spot.singleSpot))

  const generateDate = (date) => {
    const event = new Date(date);
    const month = event.toLocaleString('default', { month: 'long' });
    const year = event.toLocaleString('default', { year: 'numeric' });
    return `${month} ${year}`
  }

  const { name, Owner, city, state, country, SpotImages, description, avgStarRating, numReviews, price} = spot

  return (
    <div>
        <SingleSpotInformation />
      <div>
      <h2 className='stars'><span className="material-symbols-outlined">star_rate</span>{avgStarRating} · {numReviews} {numReviews > 1 ? "Reviews" : "Review"}</h2>
        {reviewsList.map((review) => (
          <div key={review.id}>
            <h3 className="user-first-name">{review.User.firstName}</h3>
            <h4>{generateDate(review.createdAt)}</h4>
            <p>{review.review}</p>
          </div>

        ))}
      </div>

    </div>
  )
}

import './SpotReviews.css'
import { useDispatch } from 'react-redux'
import { thunkCreateReview } from '../../store/reviews'
import { useModal } from '../../context/Modal'
import { thunkGetSpotInfo } from '../../store/spots'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useState, useEffect } from 'react'



export const CreateReviewModalButton = ({ spot, user, spotId, avgStarRating, numReviews }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { closeModal } = useModal()
  const [review, setReview] = useState('');
  const [stars, setStars] = useState(null);
  const [activeRating, setActiveRating] = useState(null)
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState(null)

  useEffect(() => {
    const errors = {}
    if (stars < 1) errors.stars = "Please add star rating"
    if (review.length < 10) errors.review = "Review must be at least 10 characters long"

    setErrors(errors)
  }, [review, stars])

  if(!user) return null

  const onClick = (e) => {
    e.preventDefault();

      const newReview = {stars, review}
      const spotId = spot.id
       dispatch(thunkCreateReview(newReview, spotId, user))

       .then(() => dispatch(thunkGetSpotInfo(spot.id)))
       .then(() => closeModal())

      .catch(error => {
        setServerError(error)
      })

  }

  const disabled = review.length < 10 || !stars || Object.values(errors) < 0




  return (
    <>
      <form className='create-review-form' onSubmit={onClick} >
        <div className='post-review-container'>
          <h2>How was your stay?</h2>

          {serverError && <p className="server-error">{serverError}</p>}
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Leave your review here..."
          />
          <label className="review-label">
            Stars:
            <div className="rating-input">
              <div
                className={activeRating >= 1 ? "filled" : "empty"}
                onMouseEnter={() => setActiveRating(1)}
                onMouseLeave={() => setActiveRating(stars)}
                onClick={() => setStars(1)}
              >
                <span className="material-symbols-outlined">star_rate</span>
              </div>
              <div
                className={activeRating >= 2 ? "filled" : "empty"}
                onMouseEnter={() => setActiveRating(2)}
                onMouseLeave={() => setActiveRating(stars)}
                onClick={() => setStars(2)}
              >
                <span className="material-symbols-outlined">star_rate</span>
              </div>
              <div
                className={activeRating >= 3 ? "filled" : "empty"}
                onMouseEnter={() => setActiveRating(3)}
                onMouseLeave={() => setActiveRating(stars)}
                onClick={() => setStars(3)}
              >
                <span className="material-symbols-outlined">star_rate</span>
              </div>
              <div
                className={activeRating >= 4 ? "filled" : "empty"}
                onMouseEnter={() => setActiveRating(4)}
                onMouseLeave={() => setActiveRating(stars)}
                onClick={() => setStars(4)}
              >
                <span className="material-symbols-outlined">star_rate</span>
              </div>
              <div
                className={activeRating >= 5 ? "filled" : "empty"}
                onMouseEnter={() => setActiveRating(5)}
                onMouseLeave={() => setActiveRating(stars)}
                onClick={() => setStars(5)}
              >
                <span className="material-symbols-outlined">star_rate</span>
              </div>
            </div>

          </label>
          <button className="review-button" disabled={disabled} onClick={onClick} type="submit">Submit Your Review</button>
        </div>
      </form>
    </>
  )
}

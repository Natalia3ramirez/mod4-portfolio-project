import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { thunkGetSpotInfo } from '../../store/spots';
// import OpenModalButton from "../OpenModalButton";
// import ReserveModal from '../ReserveModal';
import { thunkGetSpotReviews } from '../../store/reviews';
import './SingleSpotInformation.css'



export const SingleSpotInformation = () => {
  const dispatch = useDispatch();
  const { spotId } = useParams();
  const oneSpot = useSelector(state => (state.spot.singleSpot))
  const reviews = useSelector(state => state.review.spot)

  // const user = useSelector(state => state.session.user)


  useEffect(() => {
    dispatch(thunkGetSpotInfo(spotId))
  }, [dispatch, spotId])


  useEffect(() => {
    dispatch(thunkGetSpotReviews(spotId))
  }, [dispatch, spotId])


  if (!oneSpot.id) return null;
  if (!reviews[spotId]) return null
  const reviewsList = Object.values(reviews[spotId]).reverse()


  const { name, Owner, city, state, country, SpotImages, description, avgStarRating, numReviews, price } = oneSpot


  const imagePreview = SpotImages.find(image => image.preview) || SpotImages[0]
  const additionalImages = SpotImages.filter(image => !image.preview)


  return (
    <div>
      <div className='spot-details-page'>
        <h1>{name}</h1>
        <h3>{city}, {state}, {country}</h3>
        <div>
          <div className='container-for-images'>
            <div className='spot-images'>
              <div className="preview-image-conatiner">
                <img className='spot-preview-image' src={imagePreview.url} alt="" />
              </div>
              <div className='four-image-container'>
                {additionalImages.map((spot) => (
                  <img src={spot.url} key={spot.id} className='four-images' alt='name' />
                ))}
              </div>
            </div>
          </div>
          <div className='description-reserve-container'>
            <div className='spot-name-description'>
              <h3>Hosted by {Owner.firstName} {Owner.lastName}</h3>
              <p>{description}</p>
            </div>
            <div className='reserve-box'>
              <div className='reviews-price-container'>

                <h4 className='price-per-night-reserve'>${Number(price).toFixed(2)} night</h4>
                {reviewsList.length ?
                  <h5 className='stars star-and-reviews'><span className="material-symbols-outlined">star_rate</span>{Number(avgStarRating).toFixed(1)} · {numReviews} {numReviews > 1 ? "Reviews" : "Review"}</h5>
                  :
                  <h5 className='stars star-and-reviews' ><span className="material-symbols-outlined">star_rate</span> New</h5>
                }
              </div>
              <div className='reserve-modal'>
                <button onClick={() => alert("feature coming soon...")}>Reserve</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


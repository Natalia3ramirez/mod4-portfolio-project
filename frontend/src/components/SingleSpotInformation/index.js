import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { thunkGetSpotInfo } from '../../store/spots';
import OpenModalButton from "../OpenModalButton";
import ReserveModal from '../ReserveModal';
import { thunkGetSpotReviews } from '../../store/reviews';
// import { SpotReviews } from '../SpotReviews';
import './SingleSpotInformation.css'



export const SingleSpotInformation = () => {
  const dispatch = useDispatch();
  const { spotId } = useParams();
  const oneSpot = useSelector(state => (state.spot.singleSpot))
  const reviews = useSelector(state => state.review.spot)
  const oneSpotList = Object.keys(oneSpot)



  const reviewsList = Object.values(reviews).reverse()

  useEffect(() => {
    dispatch(thunkGetSpotInfo(spotId))
  }, [dispatch, spotId])


  useEffect(() => {
    dispatch(thunkGetSpotReviews(spotId))
  }, [dispatch, spotId])


  if (oneSpotList.length < 1) return null;


  const { name, Owner, city, state, country, SpotImages, description, avgStarRating, numReviews, price } = oneSpot


  const imagePreview = SpotImages.find(image => image.preview) || SpotImages[0]
  const additionalImages = SpotImages.filter(image => !image.preview)



  return (
    <>
      <div className='spot-details-page'>
        <h1>{name}</h1>
        <div>
          <h3>{city}, {state}, {country}</h3>
          <div className='spot-images'>
            <div className="preview-image-conatiner">
              <img className='spot-preview-image' src={imagePreview.url} alt="" />
            </div>
            <div className='four-image-container'>
              {additionalImages.slice(0, 5).map((spot) => (
                <img src={spot.url} key={spot.id} className='four-images' alt='name' />
              ))}
            </div>
          </div>
          <div className='spot-name-description'>
            <h2>{Owner.firstName} {Owner.lastName}</h2>
            <h3>{description}</h3>
          </div>
          <div className='reserve-box'>
            <h2>${Number(price).toFixed(2)} per night</h2>
            {reviewsList.length ?
              <div>
                <h4 className='stars'><span className="material-symbols-outlined">star_rate</span>{avgStarRating} · {numReviews} {numReviews > 1 ? "Reviews" : "Review"}</h4>
              </div>
              :
              <div>
                <h4 className='stars'>New</h4>
              </div>}
            <div className='reserve-modal'>
              <OpenModalButton buttonText='Reserve' modalComponent={<ReserveModal />} />
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </>
  )
}


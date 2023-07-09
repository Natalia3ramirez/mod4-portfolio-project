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



  const user = useSelector(state => state.session.user)


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



  // const getDate = (date ) => {
  //   const newDate = new Date(date);
  //   const month = newDate.toLocaleString('default', {month: 'long'});
  //   const year = newDate.toLocaleDateString('default', { year: 'numeric'})
  //   return `${month} ${year}`
  // }


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
          <div className='spot-name-description'>
            <h3>Hosted by {Owner.firstName} {Owner.lastName}</h3>
            <h4>{description}</h4>
          </div>
          <div className='reserve-box'>
            <h3>${Number(price).toFixed(2)} night</h3>
            {reviewsList.length ?
              <div>
                <h4 className='stars'><span className="material-symbols-outlined">star_rate</span>{Number(avgStarRating).toFixed(1)} · {numReviews} {numReviews > 1 ? "Reviews" : "Review"}</h4>
              </div>
              :
              <div>
                <h4 className='stars' ><span className="material-symbols-outlined">star_rate</span> New</h4>
              </div>}
            <div className='reserve-modal'>
              <OpenModalButton buttonText='Reserve' modalComponent={<ReserveModal />} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


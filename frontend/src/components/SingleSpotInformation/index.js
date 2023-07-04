import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { thunkGetSpotInfo } from '../../store/spots';
import OpenModalButton from "../OpenModalButton";
import ReserveModal from '../ReserveModal';



export const SingleSpotInformation = () => {
  const dispatch = useDispatch();
  const { spotId } = useParams();
  const oneSpot = useSelector(state => (state.spot.singleSpot))

  useEffect(() => {
    dispatch(thunkGetSpotInfo(spotId))
  }, [dispatch, spotId])

  if (Object.keys(oneSpot).length < 1) return null;


  const { name, Owner, city, state, country, SpotImages, description} = oneSpot

  const imagePreview = SpotImages.find(image => image.preview) || SpotImages[0]
  const additionalImages = SpotImages.filter(image => !image.preview)

  return (
    <>
    <h1>{name}</h1>
      <div>
        <h3>Location: {city}, {state}, {country}</h3>
        <div className='spot-images'>
          <div className="preview-image-conatiner">
            <img className='preview-image' src={imagePreview.url} alt=""/>
          </div>
          {additionalImages.slice(0, 5).map((spot) => (
            <img src={spot.url} key={spot.id} className='four-images' alt='name' />
          ))}
        </div>
        <div>
          <h3>Description: {description}</h3>
          <h2>Hosted by: {Owner.firstName}, {Owner.lastName}</h2>
        </div>
      </div>
      <div className='reserve-modal'>
        <OpenModalButton buttonText='Reserve' modalComponent={<ReserveModal />}/>
      </div>

    </>
  )
}


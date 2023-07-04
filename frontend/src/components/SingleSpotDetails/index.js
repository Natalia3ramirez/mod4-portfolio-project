import { useHistory } from 'react-router';
import './SingleSpotDetails.css'


export const SingleSpotDetails = ({spot}) => {
  const history = useHistory()

  const { id, name, previewImage, city, state, avgRating, price} = spot;


  const handleClick = () => {
    history.push(`/spots/${spot.id}`)
  }

  const displayImage = previewImage ? previewImage : null


  return (

    <div className='all-spots-container' key={id} onClick={handleClick}>
      <div id='spot-detail' >
        <div id='name-container'>
          <span className='spot-name-tooltip'>{name}</span>
          <img src={displayImage} alt={name} className='preview-image' title={name} />
         </div>
      </div>
      <div className='spot-details-container'>
        <div className='spot-city-and-state'>{city}, {state}</div>
        <div className='star-rating'>
          <span className='star'>Star Rating: </span>
          <span className={avgRating ? '' : 'new-rating'}>{avgRating ? avgRating : 'New!'}</span>
        </div>
      </div>
      <div className='spot-price-container'>
        <span className='spot-price'>${price}</span>
        <span className='night-text'>/night</span>
      </div>
    </div>
  )
}



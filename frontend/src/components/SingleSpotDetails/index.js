import { useHistory } from 'react-router';
import './SingleSpotDetails.css'



export const SingleSpotDetails = ({ spot }) => {
  const history = useHistory()

  const { id, name, previewImage, city, state, avgRating, price } = spot;

  const handleClick = () => {
    history.push(`/spots/${spot.id}`)
  }

  const displayImage = previewImage ? previewImage : null


  return (
    <div className='all-spots-container'>
      <div key={id} onClick={handleClick}>
        <div id='spot-detail' >
          <div id='name-container'>
            <span className='spot-name-tooltip'>{name}</span>
            <img src={displayImage} alt={name} className='preview-image' title={name} />
          </div>
        </div>
        <div className='spot-text-container'>
          <div className='star-rating'>
            <span className='spot-city-and-state'>{city}, {state}</span>
            <div className="star-and-rating">
              <span className="material-symbols-outlined">star_rate</span>

              <span className='rating'>{avgRating ? `${Number(avgRating).toFixed(1)}` : 'New!'}</span>
            </div>
          </div>
        </div>
        <div className='spot-price-container'>
          <span className='spot-price'>${Number(price).toFixed(2)}</span>
          <span className='night-text'> night</span>
        </div>
      </div>
    </div>

  )
}



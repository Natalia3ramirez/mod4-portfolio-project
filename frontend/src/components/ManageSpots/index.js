import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { thunkGetUserSpots } from '../../store/spots';
import { SingleSpotDetails } from '../SingleSpotDetails';


import './ManageSpots.css'

import OpenModalButton from '../OpenModalButton';
import { DeleteSpotModal } from './DeleteSpotModal';

export const ManageSpots = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const user = useSelector(state => state.session.user)
  const spots = useSelector(state => state.spot.allSpots)
  const spotsList = Object.values(spots)


useEffect(() => {
  dispatch(thunkGetUserSpots())
}, [dispatch])

if(!user) return null

  const newSpotButton = () => {
    history.push('/spots/new')
  }

  const updateSpot = (spotId) => {
    history.push(`/spots/${spotId}/edit`)
  }


  return (
    <>
      <div className='creat-new-spot-container'>
        <div className="manage-spot-container">
          <h1>{spotsList && spotsList.length <= 0 ? "Add your first Spot!" : "Manage Spots"}</h1>
          <button onClick={newSpotButton}>Create a New Spot</button>
        </div>
        <div className="spot-details-container">
          {spotsList.map(spot => (
            <div key={spot.id}>
              <SingleSpotDetails manage={true} spot={spot} />
              <div className='delete-button'>
                <OpenModalButton buttonText='Delete' modalComponent={<DeleteSpotModal spotId={spot.id} />} />
                <button onClick={() => updateSpot(spot.id)} className="edit-spot-button">Update</button>
              </div>
            </div>))}
        </div>

      </div>
    </>
  )

}

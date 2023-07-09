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
  const userSpots = spotsList.filter(spot => spot.ownerId === user.id)




  useEffect(() => {
    dispatch(thunkGetUserSpots())
  }, [dispatch])


  const newSpotButton = () => {
    history.push('/spots/new')
  }

  const updateSpot = (spotId) => {
    history.push(`/spots/${spotId}/edit`)
  }

  return (
    <>
      <div className='creat-new-spot-container'>
        <div>
          <h1>{userSpots.length <= 0 ? "Add your first Spot!" : "Manage your Spots"}</h1>
          <button onClick={newSpotButton}>Create a New Spot</button>
        </div>
        <div>
          {spotsList.map(spot => (<div key={spot.id}>
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

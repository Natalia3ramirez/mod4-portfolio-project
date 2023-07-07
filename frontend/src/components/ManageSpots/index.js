import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { thunkGetUserSpots } from '../../store/spots';
import { SingleSpotDetails } from '../SingleSpotDetails';


import './ManageSpots.css'

import OpenModalButton from '../OpenModalButton';
import {  DeleteSpotModal } from './DeleteSpotModal';

export const ManageSpots = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const spots = useSelector(state => state.spot.allSpots)
  const spotsList = Object.values(spots)


  useEffect(() => {
    console.log(dispatch(thunkGetUserSpots()))
  }, [dispatch])

  if (spotsList.length < 1) return null

  const newSpotButton = () => {
    history.push('/spots/new')
  }

  const updateSpot = (spotId) => {
    history.push(`/spots/${spotId}/edit`)
  }

  return (
    <>
      <div className='creat-new-spot-container'>
        <div>{spotsList.length < 0 ? "Add your first Spot!" : "Manage your Spots"}</div>
        <button onClick={newSpotButton}>Create a New Spot</button>
        <div>
          {spotsList.map(spot => (<div key={spot.id}>
            <SingleSpotDetails manage={true} spot={spot} />
            <div className='delete-button'>
              <OpenModalButton buttonText='Delete' modalComponent={<DeleteSpotModal spotId={spot.id}/>} />
              <button onClick={updateSpot} className="edit-spot-button">Update</button>
            </div>
          </div>))}
        </div>

      </div>
    </>
  )

}

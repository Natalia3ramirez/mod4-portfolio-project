import './Spots.css'
import { thunkGetSpots } from '../../store/spots';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react'
import { SingleSpotDetails } from '../SingleSpotDetails';


export const Spots = () => {
  const dispatch = useDispatch();
  const getSpots = useSelector(state => state.spot.allSpots)
  const spots = Object.values(getSpots)


  useEffect(() => {
    dispatch(thunkGetSpots())
  }, [dispatch ])

  if(!spots.length > 0) return null
  return (
    <div className='spot-details-container'>
      {spots.map(spot => (
          <SingleSpotDetails key={spot.id} spot={spot} />
        ))}
    </div>
  )

}



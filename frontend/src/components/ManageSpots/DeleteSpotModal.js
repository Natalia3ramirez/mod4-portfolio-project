import './ManageSpots.css';
import { useDispatch } from 'react-redux';
import { thunkDeleteSpot } from '../../store/spots';
import { useModal } from '../../context/Modal';


export const DeleteSpotModal = ({ spotId }) => {
  const dispatch = useDispatch()

  const { closeModal } = useModal()

  const onClick = (e) => {
    e.preventDefault();
    return dispatch(thunkDeleteSpot(spotId))
      .then(closeModal)
  }


  return (
    <>
      <div className='delete-spot-container'>
        <h3>Confirm Delete</h3>
        <p>Are you sure you want to remove this spot from the listings?</p>
        <div className='yes-no-delete-spot'>
          <button type='button' onClick={onClick} className='yes-button'>Yes (Delete Spot)</button>
          <button type='button' onClick={closeModal} className='no-button'>No (Keep Spot)</button>
        </div>
      </div>
    </>
  )
}

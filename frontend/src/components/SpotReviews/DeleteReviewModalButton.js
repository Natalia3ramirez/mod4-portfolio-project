import './SpotReviews.css'
import { useDispatch } from 'react-redux';
import { thunkDeleteReview } from '../../store/reviews';
import { useModal } from '../../context/Modal';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { thunkGetSpotInfo } from '../../store/spots';



export const DeleteReviewModalButton = ({ reviewId, spotId }) => {
  const dispatch = useDispatch()

  const { closeModal } = useModal()

  const onClick = (e) => {
    e.preventDefault();
    dispatch(thunkDeleteReview(reviewId, spotId))
      .then(() => dispatch(thunkGetSpotInfo(spotId)))
      .then(closeModal)

  }


  return (
    <>
      <div className='delete-review-container'>
        <h2>Confirm Delete</h2>
        <p>Are you sure you want to delete this review?</p>
        <div className='delete-review-yes-no'>
          <button type='button' onClick={onClick} className='yes-button'>Yes (Delete Review)</button>
          <button type='button' onClick={closeModal} className='no-button'>No (Keep Review)</button>
        </div>
      </div>
    </>
  )
}

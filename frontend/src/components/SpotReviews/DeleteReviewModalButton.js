import './SpotReviews.css'
import { useDispatch } from 'react-redux';
import { thunkDeleteReview } from '../../store/reviews';
import { useModal } from '../../context/Modal';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { thunkGetSpotInfo } from '../../store/spots';



export const DeleteReviewModalButton = ({reviewId, spotId}) => {
  const dispatch = useDispatch()
  // const history = useHistory()
  // const spot = useSelector(state => (state.spot.singleSpot))

  const { closeModal } = useModal()
  const reload=()=>window.location.reload()

  const onClick = (e) => {
    e.preventDefault();
    return dispatch(thunkDeleteReview(reviewId))
    .then(dispatch(thunkGetSpotInfo(spotId)))
    .then(closeModal)
    .then(reload())
  }


  return (
    <>
      <div className='delete-review-container'>
        <h2>Confirm Delete</h2>
        <h3>Are you sure you want to delete this review?</h3>
        <button type='button' onClick={onClick} className='yes-button'>Yes (Delete Review)</button>
        <button type='button' onClick={closeModal} className='no-button'>No (Keep Review)</button>
      </div>
    </>
  )
}

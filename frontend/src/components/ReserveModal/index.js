import { useModal } from '../../context/Modal'

const ReserveModal = () => {
  const { closeModal } = useModal()

  return (
    <div className='reserve-container'>
      <h2>Feature Coming Soon...</h2>
      <button onClick={closeModal}>Exit</button>
    </div>
  )
}


export default ReserveModal;

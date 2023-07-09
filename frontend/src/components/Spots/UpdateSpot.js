import './Spots.css'
import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { thunkGetSpotInfo, thunkUpdateSpot } from '../../store/spots'




export const UpdateSpot = ({ spot }) => {
  const dispatch = useDispatch();
  const history = useHistory()


  const [address, setAddress] = useState(spot?.address);
  const [city, setCity] = useState(spot?.city);
  const [state, setState] = useState(spot?.state);
  const [country, setCountry] = useState(spot?.country);
  const [name, setName] = useState(spot?.name);
  const [description, setDescription] = useState(spot?.description);
  const [price, setPrice] = useState(spot?.price);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false)

  // useEffect(() => {
  //   setAddress(spot.address)
  //   setCity(spot.city)
  //   setState(spot.state)
  //   setCountry(spot.country)
  //   setName(spot.name)
  //   setDescription(spot.description)
  //   setPrice(spot.price)

  // }, [spot])

  // useEffect(() => {
  //   dispatch(thunkGetSpotInfo(spotId))
  // }, [])


  useEffect(() => {
    const errors = {}

    if(!address) errors.address = "Please enter valid address"
    if(!city) errors.city = "Please enter valid city"
    if(!state) errors.state = "Please enter valid city"
    if(!country) errors.country = "Please enter valid country"
    if(!name) errors.name = "Please enter valid name"
    if(!description) errors.description = "Please enter description"
    if(!price || price < 1) errors.price = "Please enter a price"

    setErrors(errors)
  }, [address, city, state, country, name, description, price] )

  if(!spot) {
    history.push('/')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setSubmitted(true)


    if(!Object.values(errors).length) {
      let updateSpot = { address, city, state, country, name, description, price, lat: 90, lng: 90 }
     await dispatch(thunkUpdateSpot(updateSpot, spot.id))
      history.push(`/spots/${spot.id}`)


    } else {
      history.push('/')
    }

  }



  return (
    <form onSubmit={handleSubmit} className='creat-newspot-container'>
      <h1>Update Your Spot!</h1>

      <div className='create-newspot-header'>
        <h3>Where's your place located?</h3>
        <p>Guests will only get your exact address once they booked a reservation.</p>

        <label>Country</label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder='Country'
        />
        <p className='form-errors'>{errors.country}</p>

        <label>Street Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder='Address'
        />
        <p className='form-input-errors'>{errors.address}</p>

        <label>City</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder='City'
        /><p className='form-input-errors'>{errors.city}</p>

        <label>State</label>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder='State'
        /><p className='form-input-errors'>{errors.state}</p>

      </div>

      <div className='create-spot-description'>
        <h3>Describe your place to guests</h3>
        <p>Mention the best feature of your space, any special amenities like fast wifi or parking, and what you love about the neighborhood.</p>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Please write at least 30 characters"
        />
        <p className='form-input-errors'>{errors.description}</p>
      </div>

      <div className='create-spot-title'>
        <h3>Create a title for your spot</h3>
        <p>Catch guests' attention with a spot title that highlights what makes your place special.</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Name your spot'
        />
        <p className='form-input-errors'>{errors.name}</p>
      </div>

      <div className='create-spot-price'>
        <h3>Set a base price for your spot</h3>
        <p>Competitive pricing can help your listing stand out and rank higher in search results.</p>
        $<input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder='Price per night (USD)'
        />
        <p className='form-input-errors'>{errors.price}</p>
      </div>

      <button type='submit' >Update Your Spot</button>

    </form>

  )


}

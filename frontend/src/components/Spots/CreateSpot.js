import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { thunkCreateSpot } from '../../store/spots'
import './Spots.css'

export const CreateSpot = ({ user }) => {

  const history = useHistory();
  const dispatch = useDispatch();

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [lat] = useState(33.7078)
  const [lng] = useState(-117.7679);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imgOne, setImgOne] = useState('');
  const [imgTwo, setImgTwo] = useState('');
  const [imgThree, setImgThree] = useState('');
  const [imgFour, setImgFour] = useState('');
  const [imgFive, setImageFive] = useState('');
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const errors = {}

    if (!address) errors.address = "Address is required"
    if (!city) errors.city = "City is required"
    if (!state) errors.state = "State is required"
    if (!country.length) errors.country = "Country is required"
    if (!name) errors.name = "Name is required"
    if (!description) errors.description = "Description must be at least 30 characters"
    if (!price || price < 1) errors.price = "Price is required"
    if (!imgOne) errors.imgOne = 'Preview Image is required.'
    if (imgOne && !imgOne.endsWith('jpg') && !imgOne.endsWith('jpeg') && !imgOne.endsWith('png')) errors.imgOne = 'Preview Image is requires and must be .jpg, .jpeg, or .jnp'
    if (imgTwo && !imgTwo.endsWith('jpg') && !imgTwo.endsWith('jpeg') && !imgTwo.endsWith('png')) errors.imgTwo = 'Image must be .jpg, .jpeg, or .jnp'
    if (imgThree && !imgThree.endsWith('jpg') && !imgThree.endsWith('jpeg') && !imgThree.endsWith('png')) errors.imgThree = 'Image must be .jpg, .jpeg, or .jnp'
    if (imgFour && !imgFour.endsWith('jpg') && !imgFour.endsWith('jpeg') && !imgFour.endsWith('png')) errors.imgFour = 'Image must be .jpg, .jpeg, or .jnp'
    if (imgFive && !imgFive.endsWith('jpg') && !imgFive.endsWith('jpeg') && !imgFive.endsWith('png')) errors.imgFive = 'Image must be .jpg, .jpeg, or .jnp'

    setErrors(errors)

  }, [address, city, state, country, name, description, price, imgOne, imgTwo, imgThree, imgFour, imgFive])




  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true)

    const imgUrl = [imgOne, imgTwo, imgThree, imgFour, imgFive]
    const newSpot = { address, city, state, country, lat, lng, name, description, price }


    const imgUrlList = []


    if (!Object.values(errors).length) {
      imgUrl.forEach((img, i) => {
        const preview = { url: img, preview: i === 0 }
        if (img) {
          imgUrlList.push(preview)
        }
      });


      const addSpot = await dispatch(thunkCreateSpot(newSpot, imgUrlList, user))
      const combinedErrors = { ...errors, Errors: addSpot.errors }

      if (addSpot.errors) setErrors(combinedErrors)
      else history.push(`/spots/${addSpot.id}`)
    }
  }



  return (
    <div className='create-a-spot-form'>
      <h1>Create a New Spot</h1>
      <form onSubmit={handleSubmit}  >

        <div className='create-newspot-header'>
          <h3>Where's your place located?</h3>
          <p>Guests will only get your exact address once they booked a reservation.</p>
          <div className='country-address-container'>
            <label>Country</label>
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder='Country'
            />
            {errors.country && submitted && (<p className='on-submit-errors'>{errors.country}</p>)}
            <label>Street Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder='Address'
            />
            {errors.address && submitted && (<p className='on-submit-errors'>{errors.address}</p>)}
          </div>
          <div className='city-and-state-container'>
            <div className='city-and-state'>
              <label className='city-label'>City</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder='City'
              />
              {errors.city && submitted && (<p className='on-submit-errors'>{errors.city}</p>)}
            </div>
            <div className='state-label'>
              <label className='state-label'>State</label>
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder='State'
              />
              {errors.state && submitted && (<p className='on-submit-errors'>{errors.state}</p>)}
            </div>
          </div>
        </div>
        <div className='create-spot-description'>
          <h3>Describe your place to guests</h3>
          <p>Mention the best feature of your space, any special amenities like fast wifi or parking, and what you love about the neighborhood.</p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Please write at least 30 characters"
          />
          {errors.description && submitted && (<p className='on-submit-errors'>{errors.description}</p>)}
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
          {errors.name && submitted && (<p className='on-submit-errors'>{errors.name}</p>)}
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
          {errors.price && submitted && (<p className='on-submit-errors'>{errors.price}</p>)}
        </div>
        <div className='create-spot-images'>
          <h3>Liven up your spot with photos</h3>
          <p>Submit a link to at least one photo to publish your spot.</p>
          <input
            type="url"
            value={imgOne}
            onChange={(e) => setImgOne(e.target.value)}
            placeholder='Preview Image URL'
          />
          {errors.imgOne && submitted && (<p className='on-submit-errors'>{errors.imgOne}</p>)}
          <input
            type="url"
            value={imgTwo}
            onChange={(e) => setImgTwo(e.target.value)}
            placeholder='Image URL'
          />
          {errors.imgTwo && submitted && (<p className='on-submit-errors'>{errors.imgTwo}</p>)}
          <input
            type="url"
            value={imgThree}
            onChange={(e) => setImgThree(e.target.value)}
            placeholder='Image URL'
          />
          {errors.imgThree && submitted && (<p className='on-submit-errors'>{errors.imgThree}</p>)}
          <input
            type="url"
            value={imgFour}
            onChange={(e) => setImgFour(e.target.value)}
            placeholder='Image URL'
          />
          {errors.imgFour && submitted && (<p className='on-submit-errors'>{errors.imgFour}</p>)}
          <input
            type="url"
            value={imgFive}
            onChange={(e) => setImageFive(e.target.value)}
            placeholder='Image URL'
          />
          {errors.imgFive && submitted && (<p className='on-submit-errors'>{errors.imgFive}</p>)}
        </div>
        <div className='create-spot-button'>
          <button className="create-spot-submit" type="submit" >Create Spot</button>
        </div>
      </form>
    </div>

  )

}

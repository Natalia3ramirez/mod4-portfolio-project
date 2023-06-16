const express = require('express');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Spot, User, Booking, SpotImage, Review, ReviewImage} = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Op} = require('sequelize');


const router = express.Router();

//get all current users bookings
router.get('/current', requireAuth, async (req, res) => {
  const bookings = await Booking.findAll({
    where: {
      userId: req.user.id
    },
    include: [
      {
      model: Spot,
      attributes: {exclude: ["description", "createdAt", "updatedAt"]},
      include: [{
        model: SpotImage,
        attributes: ['url']
      }]
    }
  ]
  })

  const newBookings = bookings.map(spot => {
    const bookingsObj = spot.toJSON()

    const img = bookingsObj.Spot

    img.previewImage = img.SpotImages[0]?.url;

    delete img.SpotImages

    return bookingsObj
  })
  res.json({Bookings: newBookings})
})



//edit a booking
router.put('/:bookingId', requireAuth, async (req, res) =>{
  const {startDate, endDate} = req.body
  const booking = await Booking.findByPk(req.params.bookingId)

  if(!booking){
    return res.status(404).json({message: "Booking couldn't be found"})
  }

  if(booking.userId !== req.user.id){
    return res.status(403).json({message: "Forbidden"})
  }

  let currentDate = new Date().toJSON().slice(0,10)
  if(startDate < currentDate || endDate < currentDate){
    return res.status(403).json({"message": "Past bookings can't be modified"})
  }

  if(endDate < startDate){
    return res.status(400).json({
      message: "Bad Request",
      errors: {
        "endDate": "endDate cannot come before startDate"
      }
    })
  }

  const bookingConflict = await Booking.findOne({
    where: {
      [Op.or]: [
        {startDate: {[Op.between]: [startDate, endDate]}},
        {endDate: {[Op.between]: [startDate, endDate]}}
      ]
    }
  })

  if(bookingConflict){
    return res.status(403).json({
      message: "Sorry, this spot is already booked for the specified dates",
      errors: {
        startDate: "Start date conflicts with an existing booking",
        endDate: "End date conflicts with an existing booking"
      }
    })
  }


  let updatedObj = {}

  if(startDate){
    updatedObj.startDate = startDate
  }
  if(endDate){
    updatedObj.endDate = endDate
  }

  booking.set(updatedObj)
  await booking.save()
  res.json(booking)
})




//delete a booking
router.delete('/:bookingId', requireAuth, async (req, res) => {
  const booking = await Booking.findByPk(req.params.bookingId)

  let currentDate = new Date()

  if(!booking){
    return res.status(404).json({message: "Booking couldn't be found"})
  }

  if(booking.startDate <= currentDate && booking.endDate >= currentDate){
   return res.status(403).json({message: "Bookings that have been started can't be deleted"})
  }
  if(booking.userId !== req.user.id){
    return res.status(403).json({message: "Forbidden"})

  }else {

  await booking.destroy()

  res.json({message: "Successfully deleted"})
  }


})


module.exports = router;

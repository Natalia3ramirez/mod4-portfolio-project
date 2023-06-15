const express = require('express');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Spot, User, Booking, SpotImage, Review, ReviewImage} = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


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










module.exports = router;

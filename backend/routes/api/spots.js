const express = require('express');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Spot, User, Booking, SpotImage, Review, ReviewImage  } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


const router = express.Router();


router.get('/', async (req, res) => {
  const allSpots = await Spot.findAll({
    include: [
      {
        model: Review
      },
      {
      model: SpotImage,
      attributes: ['url']
    }
  ]
  })

  const newSpots = allSpots.map(spot => {
    const spotObj = spot.toJSON();

    let totalRating = 0
    for(let review of spotObj.Reviews){
      totalRating += review.stars

    }
    spotObj.avgRating = totalRating / spotObj.Reviews.length;
    spotObj.previewImage = spotObj.SpotImages[0]?.url


    delete spotObj.Reviews;
    delete spotObj.SpotImages;

    return spotObj
  });

  res.json({Spots: newSpots})
})

router.get('/current', requireAuth, async (req, res, next) => {
  
})








module.exports = router;

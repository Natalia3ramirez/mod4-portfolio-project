const express = require('express');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Spot, User, Booking, SpotImage, Review, ReviewImage  } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


const router = express.Router();

//get all spots with avg rating
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

//create a spot


// get all spots by current user
router.get('/current', requireAuth, async (req, res) => {
  const spots = await Spot.findAll({
    where: {
      ownerId: req.user.id
    },
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
  const newSpots = spots.map(spot => {
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


// get all spot details by id
router.get('/:spotId', async (req, res, next) => {
  const singleSpot = await Spot.findByPk(req.params.spotId, {
    include: [
      {
        model: Review
      },
      {
        model: User,
        attributes: ['id', 'firstName', 'lastName'],
        as: 'Owner'
      },
      {
        model: SpotImage,
        attributes: ['id', 'url', 'preview']
      },
    ]
  });

  if(!singleSpot) {
    return res.status(404).json({message: "Spot couldn't be found"})
  }

  const spotObj = singleSpot.toJSON();

    let totalRating = 0
    for(let review of spotObj.Reviews){
      totalRating += review.stars

    }
    spotObj.numReviews = spotObj.Reviews.length;
    spotObj.avgStarRating = totalRating / spotObj.Reviews.length;

    delete spotObj.Reviews;

  res.json(spotObj)
})






module.exports = router;

const express = require('express');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Spot, User, Booking, SpotImage, Review, ReviewImage  } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const spot = require('../../db/models/spot');
const { Op} = require('sequelize');
const booking = require('../../db/models/booking');


const router = express.Router();





createQueryChecker = (req, res, next) => {
  const {page, size} = req.query

  const errors = {}

  if(+page < 1) errors.page = "Page must be greater than or equal to 1"
  if(+size < 1) errors.size = "Size must be greater than or equal to 1"

  if(Object.keys(errors).length > 0) {
    return res.status(400).json({message: 'Bad Request', errors: errors})

  }
  next()
}


//get all spots
router.get('/', createQueryChecker, async (req, res) => {
  let {page, size} = req.query

   pagination = {}
  if(isNaN(page) || page <= 0) page = 1;
  if(isNaN(size) || size <= 0) size = 20;

  size = +size;
  page = +page;

  if(page > 10) page = 10;
  if(size > 20) size = 20;

  pagination.limit = size;
  pagination.offset = size * (page -1)

  const allSpots = await Spot.findAll({
    include: [
      {
        model: Review
      },
      {
      model: SpotImage,
      attributes: ['url']
    }
  ],
  ...pagination
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



  return res.json({Spots: newSpots, page, size})
})



createSpotChecker = (req, res, next) => {
  const { address, city, state, country, lat, lng, name, description, price} = req.body

  const errors = {}

  if(!address) errors.address = 'Street address is required'
  if(!city) errors.city = "City is required"
  if(!state) errors.state = "State is required"
  if(!country) errors.country = "Country is required"
  if(!lat) errors.lat = "Latitude is not valid"
  if(!lng) errors.lng = "Longitude is not valid"
  if(!name) errors.name = "Name must be less than 50 characters"
  if(!description) errors.description = "Description is required"
  if(!price) errors.price = "Price per day is required"

  if(Object.keys(errors).length > 0) {
    return res.status(400).json({message: 'Bad Request', errors: errors})

  }

  next()
}

//create a spot
router.post('/', requireAuth, createSpotChecker,  async (req, res, next) => {
  const { address, city, state, country, lat, lng, name, description, price} = req.body

  const newSpot = await Spot.create({
    ownerId: req.user.id,
    address,
    city,
    state,
    country,
    lat,
    lng,
    name,
    description,
    price,
  })
  res.status(201).json(newSpot)
})


//add an image based on spotid
router.post('/:spotId/images', requireAuth, async (req, res, next) => {
  const { url, preview } = req.body

  const spot = await Spot.findByPk(req.params.spotId)
  if(!spot){
    return res.status(404).json({message: "Spot couldn't be found"})
  }
  if(spot.ownerId !== req.user.id){
    return res.status(403).json({message: "Forbidden"})
  }

  const newImage = await spot.createSpotImage({
    spotId: req.params.spotId,
    url,
    preview
  })

 res.json({
  id: newImage.id,
  url: newImage.url,
  preview: newImage.preview
 })
})


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
router.get('/:spotId', async (req, res) => {
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


//edit a spot

router.put('/:spotId', requireAuth, createSpotChecker, async(req, res) => {
  const { address, city, state, country, lat, lng, name, description, price} = req.body

  const spot = await Spot.findByPk(req.params.spotId)

  if(!spot){
    return res.status(404).json({
      message: "Spot couldn't be found"
    })
  }
  if(spot.ownerId !== req.user.id){
    return res.status(403).json({message: "Forbidden"})
  }


    let updateObj = {}

    if(address) {
      updateObj.address = address
    }
    if(city) {
      updateObj.city = city
    }
    if(state) {
      updateObj.state = state
    }
    if(country) {
      updateObj.country = country
    }
    if(lat) {
      updateObj.lat = lat
    }
    if(lng) {
      updateObj.lng = lng
    }
    if(name) {
      updateObj.name = name
    }
    if(description) {
      updateObj.description = description
    }
    if(price) {
      updateObj.price = price
    }
    spot.set(updateObj)
    await spot.save()
    res.json(spot)

})


//delete a spot
router.delete('/:spotId', requireAuth, async (req, res) => {

  const spot = await Spot.findByPk(req.params.spotId)

  if(!spot){
    return res.status(404).json({message: "Spot couldn't be found"})
  }
  if(spot.ownerId !== req.user.id){
    return res.status(403).json({message: "Forbidden"})
  }

  await spot.destroy()

  res.json({message: "Successfully deleted"})

})

createReviewChecker = (req,res,next) => {
  const { review, stars} = req.body

  const errors = {}

  if(!review) errors.review = "Review text is required"
  if(!stars) errors.stars = "Stars must be an integer from 1 to 5"

  if(Object.keys(errors).length > 0) {
    return res.status(400).json({message: 'Bad Request', errors: errors})
  }
  next()
}


//create a review
router.post('/:spotId/reviews', requireAuth, createReviewChecker, async(req, res) => {
  const { review, stars} = req.body

  const spot = await Spot.findByPk(req.params.spotId)

  if(!spot){
    return res.status(404).json({
      message: "Spot couldn't be found"
    })
  }

  const currentReview = await Review.findOne({
    where: { spotId:req.params.spotId, userId : req.user.id}
  })

  if(currentReview){
    return res.status(500).json({message: "User already has a review for this spot"})
  }


  const newReview = await spot.createReview({
    spotId:req.params.spotId,
    userId: req.user.id,
    review,
    stars
  })

  res.status(201).json(newReview)
})



//get all reviews by spot id
router.get('/:spotId/reviews', async (req,res) => {
  const spot = await Spot.findByPk(req.params.spotId)

  if(!spot){
    return res.status(404).json({
      message: "Spot couldn't be found"
    })
  }

  const reviews = await Review.findAll({
    where: {
      spotId: req.params.spotId
    },
    include: [
    {
      model: User,
      attributes: ["id", "firstName", "lastName"]
    },
    {
      model: ReviewImage,
      attributes:['id', 'url']
    }
  ]

  })

  res.json({
    "Reviews": reviews})
})




//create a booking from a Spot based on Spot's id
router.post('/:spotId/bookings', requireAuth, async (req, res) => {
  const {startDate, endDate } = req.body
  const spot = await Spot.findByPk(req.params.spotId)

  if(!spot){
    return res.status(404).json({message: "Spot couldn't be found"})
  }
  if(spot.ownerId === req.user.id){
    return res.status(403).json({message: "Forbidden"})
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

    const newBooking = await spot.createBooking({
      userId: req.user.id,
      spotId: spot.id,
      startDate,
      endDate
  })

  res.json(newBooking)
})


//get all bookings for a spot based on spotId
router.get('/:spotId/bookings', requireAuth, async (req, res) => {
  const spot = await Spot.findByPk(req.params.spotId)

  if(!spot){
    return res.status(404).json({
      message: "Spot couldn't be found"
    })
  }

  const bookings = await Booking.findAll({
    where: {
      spotId: req.params.spotId
    },
    attributes: ['spotId', 'startDate', 'endDate']
  })

  const ownerBookings = await Booking.findAll({
    where: {
      spotId: req.params.spotId
    },
    include: [
      {
        model: User,
        attributes: ["id", "firstName", "lastName"]
      }]
  })

  if(spot.ownerId !== req.user.id){
    res.json({"Bookings":bookings})
  }

  if(spot.ownerId === req.user.id){
    res.json({"Bookings": ownerBookings})
  }
})



module.exports = router;

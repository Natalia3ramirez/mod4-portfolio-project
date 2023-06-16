const express = require('express');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Spot, User, Booking, SpotImage, Review, ReviewImage } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


const router = express.Router();

//add image to a review
router.post('/:reviewId/images', requireAuth, async (req, res) => {
  const {url} = req.body
  const review = await Review.findByPk(req.params.reviewId)

  if(!review){
    return res.status(404).json({
      message: "Review couldn't be found"
    })
  }

  if(review.userId !== req.user.id){
    return res.status(403).json({message: "Forbidden"})
  }

  const allImages = await ReviewImage.findAll({
    where: {
      reviewId: req.params.reviewId
    }
  })

  let reviewObj = []
  allImages.forEach(image => {
    reviewObj.push(image.toJSON())
  })

  if(reviewObj.length >= 10){
    return res.status(403).json({
      message: "Maximum number of images for this resource was reached"
    })
  }

  const newImage = await review.createReviewImage({
    reviewId: req.params.reviewId,
    url
  })

  res.json({id: newImage.id, url: newImage.url})

})




//get all reviews by current user

router.get('/current', requireAuth, async (req, res) => {
  const reviews = await Review.findAll({
    where: {
      userId: req.user.id
    },
    include: [{
      model: User,
      attributes: ['id', 'firstName', 'lastName']
    },
    {
      model: Spot,
      attributes: {exclude: ["description", "createdAt", "updatedAt"]},
      include: {
        model: SpotImage,
        attributes: ['url']
      }
    },
    {
      model: ReviewImage,
      attributes: ['id', 'url']
    }
  ]
  })

  const newReviews = reviews.map(review => {
    const reviewObj = review.toJSON();

    const spot = reviewObj.Spot

    spot.previewImage = spot.SpotImages[0]?.url;

    delete spot.SpotImages;
    return reviewObj
  })

  res.json({
    Reviews: newReviews
  })

})


createReviewChecker = (req, res, next) => {
  const {review, stars} = req.body

  const errors = {}

  if(!review) errors.review = "Review text is required"
  if(!stars) errors.stars = "Stars must be an integer from 1 to 5"

  if(Object.keys(errors).length > 0) {
    return res.status(400).json({message: 'Bad Request', errors: errors})
  }
  next()
}


//edit Review
router.put('/:reviewsId', requireAuth, createReviewChecker, async (req, res) =>{
  const {review, stars} = req.body

  const oneReview = await Review.findByPk(req.params.reviewsId)

  if(!oneReview){
    return res.status(404).json({
      message: "Review couldn't be found"
    })
  }

  if(oneReview.userId !== req.user.id){
    return res.status(403).json({message: "Forbidden"})
  }

  let updatedObj = {}

  if(review) {
    updatedObj.review = review
  }
  if(stars){
    updatedObj.stars = stars
  }

  oneReview.set(updatedObj)
  await oneReview.save()
  res.json(oneReview)
})



//delete a review
router.delete('/:reviewId', requireAuth, async (req, res) =>{
  const oneReview = await Review.findByPk(req.params.reviewId)

  if(!oneReview){
    return res.status(404).json({
      message: "Review couldn't be found"
    })
  }

  if(oneReview.userId !== req.user.id){
    return res.status(403).json({message: "Forbidden"})
  }

  await oneReview.destroy()
  res.json({message: "Successfully deleted"})

})









module.exports = router;

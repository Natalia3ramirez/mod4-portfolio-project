const express = require('express');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Spot, User, Booking, SpotImage, Review, ReviewImage} = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Op} = require('sequelize');


const router = express.Router();


//delete a reviewImage

router.delete('/:imageId', requireAuth, async (req, res) => {
  const image = await ReviewImage.findByPk(req.params.imageId)

  if(!image){
    return res.status(404).json({message: "Review Image couldn't be found"})
  }

  const review = await Review.findByPk(image.reviewId)

  if(review.userId !== req.user.id){
    return res.status(403).json({message: "Forbidden"})
  }

  await image.destroy()
  return res.json({message: "Successfully deleted"})
})





module.exports = router;

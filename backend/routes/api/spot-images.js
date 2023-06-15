const express = require('express');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Spot, User, Booking, SpotImage, Review, ReviewImage, spotImage} = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Op} = require('sequelize');


const router = express.Router();

//delete spot-image
router.delete('/:imageId', requireAuth, async (req, res) => {
  const image = await SpotImage.findByPk(req.params.imageId)

  if(!image){
    return res.status(404).json({message: "Spot Image couldn't be found"})
  }
  const spot = await Spot.findByPk(image.spotId)

  if(req.user.id !== spot.ownerId){
    return res.status(403).json({message: "Forbidden"})
  }

  await image.destroy()
  res.json({message: "Successfully deleted"})
})




module.exports = router;

const express = require('express');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Spot, User, Booking, SpotImage, Review, ReviewImage} = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


const router = express.Router();













module.exports = router;

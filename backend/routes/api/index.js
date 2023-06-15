// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const bookingRouter = require('./bookings.js');
const reviewsRouter = require('./reviews.js');
const spotsRouter = require('./spots.js');
const spotImagesRouter = require('./spot-images.js');
const reviewImages = require('./review-images.js');
const { restoreUser } = require("../../utils/auth.js");


router.use(restoreUser);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/bookings', bookingRouter);

router.use('/reviews', reviewsRouter);

router.use('/spots', spotsRouter);

router.use('/spot-images', spotImagesRouter);

router.use('/review-images', reviewImages);

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});





module.exports = router;

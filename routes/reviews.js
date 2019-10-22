const express = require('express');
const { getReviews } = require('../controllers/reviews');

const router = express.Router({ mergeParams: true });
const Review = require('../models/Review');
const advancedResults = require('../middleware/advancedResult');
const { protect, authorize } = require('../middleware/auth');

router.route('/').get(
  advancedResults(Review, {
    path: 'bootcamp',
    select: 'name text',
  }),
  getReviews,
);

module.exports = router;

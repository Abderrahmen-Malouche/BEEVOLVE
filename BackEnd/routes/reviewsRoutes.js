const express = require('express');
const router = express.Router();
const { getAllReviews , addReview } = require('../controllers/reviewControllers');

router.get('/',getAllReviews );

router.post('/',addReview);

module.exports = router;
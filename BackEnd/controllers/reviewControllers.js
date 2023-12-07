const Review = require('../models/testimonial');

const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find({})
        res.json(reviews)
    } catch (e) {
        console.log(e)
    }
};
const addReview = async (req, res) => {
    try {
        const nReview = new Review({
            name: req.body.name,
            rating: req.body.rating,
            game: req.body.game,
            opinion: req.body.opinion
        });

        const newReview = await nReview.save();
        res.status(201).json(newReview);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = {
    getAllReviews,
    addReview
};
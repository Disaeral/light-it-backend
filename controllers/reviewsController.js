const {Review} = require('../models/models')

class ReviewsController {
    async create(req, res) {
        const {text, rating, deviceId, userId} = req.body
        const review = await Review.create({text, rating, deviceId, userId})
        return res.json(review)
    }
    async getAll(req, res) {
        const {id} = req.params
        const reviews = await Review.findAll({where: {deviceId:id}})
        return res.json(reviews)
    }
}

module.exports = new ReviewsController()